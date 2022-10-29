import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideUpLineByLineClippedAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'up',
      split: 'line',
      scope: 'split-clip',
      ...properties,
    });
  }
}
