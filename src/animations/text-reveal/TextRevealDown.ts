import { TextReveal, TextRevealProperties } from './TextReveal';

export class TextRevealDown extends TextReveal {
  constructor(properties: TextRevealProperties = {}) {
    super({
      split: 'line',
      axis: 'y',
      yAnchor: '0%',
      ...properties,
    });
  }
}
