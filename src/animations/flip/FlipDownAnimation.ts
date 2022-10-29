import { FlipAnimation, FlipAnimationProperties } from './FlipAnimation';

export class FlipDownAnimation extends FlipAnimation {
  constructor(properties: FlipAnimationProperties = {}) {
    super({
      xRotation: '-180°',
      yRotation: '0°',
      ...properties,
    });
  }
}
