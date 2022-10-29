import { RotateSlideAnimation, RotateSlideAnimationProperties } from './RotateSlideAnimation';

export class RotateSlideDownAnimation extends RotateSlideAnimation {
  constructor(properties: RotateSlideAnimationProperties = {}) {
    super({
      direction: 'down',
      ...properties,
    });
  }
}
