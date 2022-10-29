import { ShakeAnimation, ShakeAnimationProperties } from './ShakeAnimation';

export class ShakeHorizontallyAnimation extends ShakeAnimation {
  constructor(properties: ShakeAnimationProperties = {}) {
    super({
      direction: '0°',
      ...properties,
    });
  }
}
