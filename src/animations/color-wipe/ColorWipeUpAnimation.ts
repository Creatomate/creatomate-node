import { ColorWipeAnimation, ColorWipeAnimationProperties } from './ColorWipeAnimation';

export class ColorWipeUpAnimation extends ColorWipeAnimation {
  constructor(properties: ColorWipeAnimationProperties = {}) {
    super({
      direction: 'up',
      ...properties,
    });
  }
}
