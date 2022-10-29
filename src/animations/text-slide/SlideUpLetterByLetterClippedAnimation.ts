import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideUpLetterByLetterClippedAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'up',
      split: 'letter',
      scope: 'split-clip',
      ...properties,
    });
  }
}
