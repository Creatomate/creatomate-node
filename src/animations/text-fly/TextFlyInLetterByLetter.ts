import { TextFly, TextFlyProperties } from './TextFly';

export class TextFlyInLetterByLetter extends TextFly {
  constructor(properties: TextFlyProperties = {}) {
    super({
      split: 'letter',
      ...properties,
    });
  }
}
