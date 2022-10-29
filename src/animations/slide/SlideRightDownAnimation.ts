import { SlideAnimation, SlideAnimationProperties } from './SlideAnimation';

export class SlideRightDownAnimation extends SlideAnimation {
  constructor(properties: SlideAnimationProperties = {}) {
    super({
      direction: '315°',
      ...properties,
    });
  }
}
