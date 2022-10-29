import { TextRevealAnimation, TextRevealAnimationProperties } from './TextRevealAnimation';

export class TextRevealUpAnimation extends TextRevealAnimation {
  constructor(properties: TextRevealAnimationProperties = {}) {
    super({
      split: 'line',
      axis: 'y',
      yAnchor: '100%',
      ...properties,
    });
  }
}
