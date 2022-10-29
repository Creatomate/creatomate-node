import { TextRevealAnimation, TextRevealAnimationProperties } from './TextRevealAnimation';

export class TextRevealCenterVerticalAnimation extends TextRevealAnimation {
  constructor(properties: TextRevealAnimationProperties = {}) {
    super({
      split: 'line',
      axis: 'y',
      ...properties,
    });
  }
}
