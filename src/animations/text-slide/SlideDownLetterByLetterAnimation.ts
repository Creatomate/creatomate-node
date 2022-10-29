import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideDownLetterByLetterAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'down',
      split: 'letter',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
