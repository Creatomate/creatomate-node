import { TextScaleAnimation, TextScaleAnimationProperties } from './TextScaleAnimation';

export class TextScaleCenterAnimation extends TextScaleAnimation {
  constructor(properties: TextScaleAnimationProperties = {}) {
    super({
      split: 'line',
      ...properties,
    });
  }
}
