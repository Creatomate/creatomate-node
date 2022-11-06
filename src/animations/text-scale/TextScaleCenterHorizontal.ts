import { TextScale, TextScaleProperties } from './TextScale';

export class TextScaleCenterHorizontal extends TextScale {
  constructor(properties: TextScaleProperties = {}) {
    super({
      split: 'line',
      axis: 'x',
      ...properties,
    });
  }
}
