import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideRightWordByWordAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'right',
      split: 'word',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
