import { TextFly, TextFlyProperties } from './TextFly';

export class TextFlyInWordByWord extends TextFly {
  constructor(properties: TextFlyProperties = {}) {
    super({
      split: 'word',
      ...properties,
    });
  }
}
