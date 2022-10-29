import { TextScaleAnimation, TextScaleAnimationProperties } from './TextScaleAnimation';

export class TextScaleUpAnimation extends TextScaleAnimation {
  constructor(properties: TextScaleAnimationProperties = {}) {
    super({
      split: 'line',
      axis: 'y',
      yAnchor: '100%',
      ...properties,
    });
  }
}
