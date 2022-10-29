import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideRightLineByLineClippedAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'right',
      split: 'line',
      scope: 'split-clip',
      ...properties,
    });
  }
}
