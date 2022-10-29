import { ShakeAnimation, ShakeAnimationProperties } from './ShakeAnimation';

export class Shake45Animation extends ShakeAnimation {
  constructor(properties: ShakeAnimationProperties = {}) {
    super({
      direction: '45°',
      ...properties,
    });
  }
}
