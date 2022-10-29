import { TextScaleAnimation, TextScaleAnimationProperties } from './TextScaleAnimation';

export class TextScaleCenterVerticalAnimation extends TextScaleAnimation {
  constructor(properties: TextScaleAnimationProperties = {}) {
    super({
      split: 'line',
      axis: 'y',
      ...properties,
    });
  }
}
