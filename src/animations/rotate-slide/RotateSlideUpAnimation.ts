import { RotateSlideAnimation, RotateSlideAnimationProperties } from './RotateSlideAnimation';

export class RotateSlideUpAnimation extends RotateSlideAnimation {
  constructor(properties: RotateSlideAnimationProperties = {}) {
    super({
      direction: 'up',
      ...properties,
    });
  }
}
