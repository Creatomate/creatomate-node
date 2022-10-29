import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideUpLetterByLetterAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'up',
      split: 'letter',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
