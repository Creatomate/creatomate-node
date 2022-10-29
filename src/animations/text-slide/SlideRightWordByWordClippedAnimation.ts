import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideRightWordByWordClippedAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'right',
      split: 'word',
      scope: 'split-clip',
      ...properties,
    });
  }
}
