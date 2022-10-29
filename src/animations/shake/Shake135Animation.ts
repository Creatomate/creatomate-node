import { ShakeAnimation, ShakeAnimationProperties } from './ShakeAnimation';

export class Shake135Animation extends ShakeAnimation {
  constructor(properties: ShakeAnimationProperties = {}) {
    super({
      direction: '135°',
      ...properties,
    });
  }
}
