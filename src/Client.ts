import axios, { AxiosError, AxiosInstance, AxiosResponse, Method } from 'axios';
import { performance } from 'perf_hooks';
import { Render } from './Render';
import { RenderOptions } from './RenderOptions';
import { Source } from './Source';
import {
  BadRequestError,
  ConnectionError,
  CreatomateError,
  InsufficientCreditsError,
  InvalidApiKeyError,
  RateLimitExceededError,
  TimeoutError,
} from './CreatomateError';
import { transformObjectKeys, transformCamelToSnakeCase, transformSnakeToCamelCase } from './utility';

const CLIENT_VERSION = '1.2.1';

export class Client {
  private readonly apiKey: string;

  private readonly httpClient: AxiosInstance;

  constructor(apiKey: string) {
    this.apiKey = apiKey;

    this.httpClient = axios.create({
      baseURL: 'https://api.creatomate.com/v1',
      responseType: 'json',
    });
  }

  /**
   * Starts a new render and awaits its completion.
   * @param options Render options.
   * @param timeout Maximum time in seconds to wait for the render to complete. If the render is not finished within the
   *    specified time, a 'TimeoutError' is thrown. The maximum timeout is 60 minutes (3600 seconds).
   */
  async render(options: RenderOptions, timeout = 900): Promise<Render[]> {
    const renders = await this.startRender(options);

    const startTime = performance.now();

    let unfinishedRenders = [...renders];
    const finishedRenders: Render[] = [];

    const queue: Render[] = [];

    await new Promise<void>((resolve, reject) => {
      const pollStatus = async () => {
        if (queue.length === 0) {
          queue.push(...unfinishedRenders);
        }

        const render = queue.pop();
        if (!render) {
          resolve();
          return;
        }

        try {
          const updatedRender = await this.fetchRender(render.id);

          if (
            updatedRender.status !== 'planned' &&
            updatedRender.status !== 'waiting' &&
            updatedRender.status !== 'transcribing' &&
            updatedRender.status !== 'rendering'
          ) {
            unfinishedRenders = unfinishedRenders.filter(({ id }) => id !== render.id);

            finishedRenders.push(updatedRender);
          }
        } catch (error) {
          reject(error);
          return;
        }

        if (unfinishedRenders.length === 0) {
          resolve();
          return;
        }

        if (performance.now() - startTime >= Math.min(timeout, 3600) * 1000) {
          reject(new TimeoutError());
          return;
        }

        setTimeout(pollStatus, 2000);
      };

      setTimeout(pollStatus, 2000);
    });

    return finishedRenders;
  }

  /**
   * Starts a render, but doesn't wait for it to finish.
   * @param options Render options.
   */
  async startRender(options: RenderOptions): Promise<Render[]> {
    const response = await this.httpRequest<Render[]>('POST', '/renders', {
      ...transformObjectKeys(transformCamelToSnakeCase, options),
      ...(options.source
        ? {
            source: options.source instanceof Source ? options.source.toMap() : options.source,
          }
        : {}),
    });

    return response.data;
  }

  /**
   * Fetches the status of the render.
   * @param id The ID of the render.
   */
  async fetchRender(id: string): Promise<Render> {
    const { data } = await this.httpRequest<Render>('GET', `/renders/${id}`);
    return transformObjectKeys(transformSnakeToCamelCase, data);
  }

  private httpRequest<T = any, R = AxiosResponse<T>, D = any>(method: Method, path: string, body?: D): Promise<R> {
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
      'User-Agent': `Creatomate-Node/${CLIENT_VERSION}`,
    };

    return this.httpClient
      .request<T, R, D>({
        method,
        url: path,
        data: body,
        headers,
      })
      .catch((error) => {
        return Promise.reject(this.transformError(error));
      });
  }

  private transformError(error: AxiosError<any>): CreatomateError {
    if (!error.response) {
      return new ConnectionError();
    } else if (error.response.status === 400) {
      return new BadRequestError(error.response?.data?.hint);
    } else if (error.response.status === 401) {
      return new InvalidApiKeyError();
    } else if (error.response.status === 402) {
      return new InsufficientCreditsError();
    } else if (error.response.status === 429) {
      return new RateLimitExceededError();
    } else {
      return new CreatomateError(error.response?.data?.hint);
    }
  }
}
