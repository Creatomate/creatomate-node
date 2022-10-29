import { TextScaleAnimation, TextScaleAnimationProperties } from './TextScaleAnimation';

export class TextScaleDownAnimation extends TextScaleAnimation {
  constructor(properties: TextScaleAnimationProperties = {}) {
    super({
      split: 'line',
      axis: 'y',
      yAnchor: '0%',
      ...properties,
    });
  }
}
