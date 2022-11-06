import { TextReveal, TextRevealProperties } from './TextReveal';

export class TextRevealUp extends TextReveal {
  constructor(properties: TextRevealProperties = {}) {
    super({
      split: 'line',
      axis: 'y',
      yAnchor: '100%',
      ...properties,
    });
  }
}
