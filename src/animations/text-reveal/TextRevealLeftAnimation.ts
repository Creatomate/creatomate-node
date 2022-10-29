import { TextRevealAnimation, TextRevealAnimationProperties } from './TextRevealAnimation';

export class TextRevealLeftAnimation extends TextRevealAnimation {
  constructor(properties: TextRevealAnimationProperties = {}) {
    super({
      split: 'line',
      axis: 'x',
      xAnchor: '100%',
      ...properties,
    });
  }
}
