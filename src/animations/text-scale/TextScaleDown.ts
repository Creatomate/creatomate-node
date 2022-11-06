import { TextScale, TextScaleProperties } from './TextScale';

export class TextScaleDown extends TextScale {
  constructor(properties: TextScaleProperties = {}) {
    super({
      split: 'line',
      axis: 'y',
      yAnchor: '0%',
      ...properties,
    });
  }
}
