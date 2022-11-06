import { TextScale, TextScaleProperties } from './TextScale';

export class TextScaleCenter extends TextScale {
  constructor(properties: TextScaleProperties = {}) {
    super({
      split: 'line',
      ...properties,
    });
  }
}
