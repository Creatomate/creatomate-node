import { TextFly, TextFlyProperties } from './TextFly';

export class TextFlyInLineByLine extends TextFly {
  constructor(properties: TextFlyProperties = {}) {
    super({
      split: 'line',
      ...properties,
    });
  }
}
