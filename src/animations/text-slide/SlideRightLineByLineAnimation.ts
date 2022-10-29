import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideRightLineByLineAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'right',
      split: 'line',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
