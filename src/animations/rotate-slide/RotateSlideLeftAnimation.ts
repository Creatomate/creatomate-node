import { RotateSlideAnimation, RotateSlideAnimationProperties } from './RotateSlideAnimation';

export class RotateSlideLeftAnimation extends RotateSlideAnimation {
  constructor(properties: RotateSlideAnimationProperties = {}) {
    super({
      direction: 'left',
      ...properties,
    });
  }
}
