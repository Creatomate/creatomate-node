import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideLeftLetterByLetterAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'left',
      split: 'letter',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
