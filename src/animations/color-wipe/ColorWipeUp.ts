import { ColorWipe, ColorWipeProperties } from './ColorWipe';

export class ColorWipeUp extends ColorWipe {
  constructor(properties: ColorWipeProperties = {}) {
    super({
      direction: 'up',
      ...properties,
    });
  }
}
