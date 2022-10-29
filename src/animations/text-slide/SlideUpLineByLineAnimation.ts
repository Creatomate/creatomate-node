import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideUpLineByLineAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'up',
      split: 'line',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
