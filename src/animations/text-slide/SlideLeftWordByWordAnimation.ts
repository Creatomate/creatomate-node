import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideLeftWordByWordAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'left',
      split: 'word',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
