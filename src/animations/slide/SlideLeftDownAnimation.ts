import { SlideAnimation, SlideAnimationProperties } from './SlideAnimation';

export class SlideLeftDownAnimation extends SlideAnimation {
  constructor(properties: SlideAnimationProperties = {}) {
    super({
      direction: '225°',
      ...properties,
    });
  }
}
