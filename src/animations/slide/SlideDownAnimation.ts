import { SlideAnimation, SlideAnimationProperties } from './SlideAnimation';

export class SlideDownAnimation extends SlideAnimation {
  constructor(properties: SlideAnimationProperties = {}) {
    super({
      direction: '270°',
      ...properties,
    });
  }
}
