import { TextScale, TextScaleProperties } from './TextScale';

export class TextScaleLeft extends TextScale {
  constructor(properties: TextScaleProperties = {}) {
    super({
      split: 'line',
      axis: 'x',
      xAnchor: '100%',
      ...properties,
    });
  }
}
