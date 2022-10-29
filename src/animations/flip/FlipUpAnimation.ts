import { FlipAnimation, FlipAnimationProperties } from './FlipAnimation';

export class FlipUpAnimation extends FlipAnimation {
  constructor(properties: FlipAnimationProperties = {}) {
    super({
      xRotation: '180°',
      yRotation: '0°',
      ...properties,
    });
  }
}
