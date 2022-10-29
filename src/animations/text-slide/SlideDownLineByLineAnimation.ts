import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideDownLineByLineAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'down',
      split: 'line',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
