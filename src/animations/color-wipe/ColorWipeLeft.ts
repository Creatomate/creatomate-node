import { ColorWipe, ColorWipeProperties } from './ColorWipe';

export class ColorWipeLeft extends ColorWipe {
  constructor(properties: ColorWipeProperties = {}) {
    super({
      direction: 'left',
      ...properties,
    });
  }
}
