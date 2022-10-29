import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideLeftLineByLineAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'left',
      split: 'line',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
