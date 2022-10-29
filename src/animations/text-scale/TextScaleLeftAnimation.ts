import { TextScaleAnimation, TextScaleAnimationProperties } from './TextScaleAnimation';

export class TextScaleLeftAnimation extends TextScaleAnimation {
  constructor(properties: TextScaleAnimationProperties = {}) {
    super({
      split: 'line',
      axis: 'x',
      xAnchor: '100%',
      ...properties,
    });
  }
}
