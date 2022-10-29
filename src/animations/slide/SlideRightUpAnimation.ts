import { SlideAnimation, SlideAnimationProperties } from './SlideAnimation';

export class SlideRightUpAnimation extends SlideAnimation {
  constructor(properties: SlideAnimationProperties = {}) {
    super({
      direction: '45°',
      ...properties,
    });
  }
}
