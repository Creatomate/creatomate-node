import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideDownWordByWordClippedAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'down',
      split: 'word',
      scope: 'split-clip',
      ...properties,
    });
  }
}
