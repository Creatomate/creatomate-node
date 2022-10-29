import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideLeftLetterByLetterClippedAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'left',
      split: 'letter',
      scope: 'split-clip',
      ...properties,
    });
  }
}
