import { SlideAnimation, SlideAnimationProperties } from './SlideAnimation';

export class SlideUpAnimation extends SlideAnimation {
  constructor(properties: SlideAnimationProperties = {}) {
    super({
      direction: '90°',
      ...properties,
    });
  }
}
