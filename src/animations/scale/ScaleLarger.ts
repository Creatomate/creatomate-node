import { Scale, ScaleProperties } from './Scale';

export class ScaleLarger extends Scale {
  constructor(properties: ScaleProperties = {}) {
    super({
      startScale: '100%',
      endScale: '150%',
      ...properties,
    });
  }
}
