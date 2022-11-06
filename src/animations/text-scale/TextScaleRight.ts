import { TextScale, TextScaleProperties } from './TextScale';

export class TextScaleRight extends TextScale {
  constructor(properties: TextScaleProperties = {}) {
    super({
      split: 'line',
      axis: 'x',
      xAnchor: '0%',
      ...properties,
    });
  }
}
