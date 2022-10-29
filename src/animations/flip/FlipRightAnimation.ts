import { FlipAnimation, FlipAnimationProperties } from './FlipAnimation';

export class FlipRightAnimation extends FlipAnimation {
  constructor(properties: FlipAnimationProperties = {}) {
    super({
      xRotation: '0°',
      yRotation: '180°',
      ...properties,
    });
  }
}
