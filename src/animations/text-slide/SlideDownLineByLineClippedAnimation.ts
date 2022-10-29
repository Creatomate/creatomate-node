import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideDownLineByLineClippedAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'down',
      split: 'line',
      scope: 'split-clip',
      ...properties,
    });
  }
}
