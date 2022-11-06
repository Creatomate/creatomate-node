import { ColorWipe, ColorWipeProperties } from './ColorWipe';

export class ColorWipeDown extends ColorWipe {
  constructor(properties: ColorWipeProperties = {}) {
    super({
      direction: 'down',
      ...properties,
    });
  }
}
