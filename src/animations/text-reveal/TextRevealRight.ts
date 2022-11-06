import { TextReveal, TextRevealProperties } from './TextReveal';

export class TextRevealRight extends TextReveal {
  constructor(properties: TextRevealProperties = {}) {
    super({
      split: 'line',
      axis: 'x',
      xAnchor: '0%',
      ...properties,
    });
  }
}
