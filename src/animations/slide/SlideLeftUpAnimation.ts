import { SlideAnimation, SlideAnimationProperties } from './SlideAnimation';

export class SlideLeftUpAnimation extends SlideAnimation {
  constructor(properties: SlideAnimationProperties = {}) {
    super({
      direction: '135°',
      ...properties,
    });
  }
}
