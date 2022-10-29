import { TextRevealAnimation, TextRevealAnimationProperties } from './TextRevealAnimation';

export class TextRevealRightAnimation extends TextRevealAnimation {
  constructor(properties: TextRevealAnimationProperties = {}) {
    super({
      split: 'line',
      axis: 'x',
      xAnchor: '0%',
      ...properties,
    });
  }
}
