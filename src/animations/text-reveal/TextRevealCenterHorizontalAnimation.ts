import { TextRevealAnimation, TextRevealAnimationProperties } from './TextRevealAnimation';

export class TextRevealCenterHorizontalAnimation extends TextRevealAnimation {
  constructor(properties: TextRevealAnimationProperties = {}) {
    super({
      split: 'line',
      axis: 'x',
      ...properties,
    });
  }
}
