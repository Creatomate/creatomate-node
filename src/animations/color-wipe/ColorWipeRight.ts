import { ColorWipe, ColorWipeProperties } from './ColorWipe';

export class ColorWipeRight extends ColorWipe {
  constructor(properties: ColorWipeProperties = {}) {
    super({
      direction: 'right',
      ...properties,
    });
  }
}
