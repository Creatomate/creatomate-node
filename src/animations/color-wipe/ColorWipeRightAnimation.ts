import { ColorWipeAnimation, ColorWipeAnimationProperties } from './ColorWipeAnimation';

export class ColorWipeRightAnimation extends ColorWipeAnimation {
  constructor(properties: ColorWipeAnimationProperties = {}) {
    super({
      direction: 'right',
      ...properties,
    });
  }
}
