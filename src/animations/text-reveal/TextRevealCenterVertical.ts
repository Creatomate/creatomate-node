import { TextReveal, TextRevealProperties } from './TextReveal';

export class TextRevealCenterVertical extends TextReveal {
  constructor(properties: TextRevealProperties = {}) {
    super({
      split: 'line',
      axis: 'y',
      ...properties,
    });
  }
}
