import { SlideAnimation, SlideAnimationProperties } from './SlideAnimation';

export class SlideRightAnimation extends SlideAnimation {
  constructor(properties: SlideAnimationProperties = {}) {
    super({
      direction: '0°',
      ...properties,
    });
  }
}
