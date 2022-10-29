import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideUpWordByWordAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'up',
      split: 'word',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
