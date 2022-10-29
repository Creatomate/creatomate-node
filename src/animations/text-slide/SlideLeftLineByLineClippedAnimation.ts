import { TextSlideAnimation, TextSlideAnimationProperties } from './TextSlideAnimation';

export class SlideLeftLineByLineClippedAnimation extends TextSlideAnimation {
  constructor(properties: TextSlideAnimationProperties = {}) {
    super({
      direction: 'left',
      split: 'line',
      scope: 'split-clip',
      ...properties,
    });
  }
}
