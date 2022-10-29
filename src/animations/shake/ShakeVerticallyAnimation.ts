import { ShakeAnimation, ShakeAnimationProperties } from './ShakeAnimation';

export class ShakeVerticallyAnimation extends ShakeAnimation {
  constructor(properties: ShakeAnimationProperties = {}) {
    super({
      direction: '90°',
      ...properties,
    });
  }
}
