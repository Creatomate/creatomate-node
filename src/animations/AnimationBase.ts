import { Easing } from '../properties';
import { transformObjectKeys, transformCamelToSnakeCase } from '../utility';

export interface AnimationProperties {
  time?: number | 'start' | 'end';
  duration?: number;
  easing?: Easing;
  reversed?: boolean;
  transition?: boolean;
}

export abstract class AnimationBase<T extends AnimationProperties> {
  protected abstract type: string;

  constructor(public properties: T) {}

  toMap(): Record<string, any> {
    return transformObjectKeys(transformCamelToSnakeCase, {
      type: this.type,
      ...this.properties,
    });
  }
}
