import { TextScale, TextScaleProperties } from './TextScale';

export class TextScaleUp extends TextScale {
  constructor(properties: TextScaleProperties = {}) {
    super({
      split: 'line',
      axis: 'y',
      yAnchor: '100%',
      ...properties,
    });
  }
}
