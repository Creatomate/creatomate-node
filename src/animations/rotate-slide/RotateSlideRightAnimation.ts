import { RotateSlideAnimation, RotateSlideAnimationProperties } from './RotateSlideAnimation';

export class RotateSlideRightAnimation extends RotateSlideAnimation {
  constructor(properties: RotateSlideAnimationProperties = {}) {
    super({
      direction: 'right',
      ...properties,
    });
  }
}
