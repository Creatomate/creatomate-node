import { TextReveal, TextRevealProperties } from './TextReveal';

export class TextRevealLeft extends TextReveal {
  constructor(properties: TextRevealProperties = {}) {
    super({
      split: 'line',
      axis: 'x',
      xAnchor: '100%',
      ...properties,
    });
  }
}
