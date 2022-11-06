import { TextReveal, TextRevealProperties } from './TextReveal';

export class TextRevealCenterHorizontal extends TextReveal {
  constructor(properties: TextRevealProperties = {}) {
    super({
      split: 'line',
      axis: 'x',
      ...properties,
    });
  }
}
