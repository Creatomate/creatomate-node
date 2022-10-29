import { ColorWipeAnimation, ColorWipeAnimationProperties } from './ColorWipeAnimation';

export class ColorWipeLeftAnimation extends ColorWipeAnimation {
  constructor(properties: ColorWipeAnimationProperties = {}) {
    super({
      direction: 'left',
      ...properties,
    });
  }
}
