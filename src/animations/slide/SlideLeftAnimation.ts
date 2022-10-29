import { SlideAnimation, SlideAnimationProperties } from './SlideAnimation';

export class SlideLeftAnimation extends SlideAnimation {
  constructor(properties: SlideAnimationProperties = {}) {
    super({
      direction: '180°',
      ...properties,
    });
  }
}
