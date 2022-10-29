import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideDownLetterByLetterClippedAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'down',
      split: 'letter',
      scope: 'split-clip',
      ...properties,
    });
  }
}
