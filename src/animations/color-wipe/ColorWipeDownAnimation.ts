import { ColorWipeAnimation, ColorWipeAnimationProperties } from './ColorWipeAnimation';

export class ColorWipeDownAnimation extends ColorWipeAnimation {
  constructor(properties: ColorWipeAnimationProperties = {}) {
    super({
      direction: 'down',
      ...properties,
    });
  }
}
