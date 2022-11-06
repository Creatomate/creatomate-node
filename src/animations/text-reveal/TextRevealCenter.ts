import { TextReveal, TextRevealProperties } from './TextReveal';

export class TextRevealCenter extends TextReveal {
  constructor(properties: TextRevealProperties = {}) {
    super({
      split: 'line',
      ...properties,
    });
  }
}
