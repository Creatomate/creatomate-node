import { TextScale, TextScaleProperties } from './TextScale';

export class TextScaleCenterVertical extends TextScale {
  constructor(properties: TextScaleProperties = {}) {
    super({
      split: 'line',
      axis: 'y',
      ...properties,
    });
  }
}
