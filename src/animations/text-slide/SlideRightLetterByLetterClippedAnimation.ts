import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideRightLetterByLetterClippedAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'right',
      split: 'letter',
      scope: 'split-clip',
      ...properties,
    });
  }
}
