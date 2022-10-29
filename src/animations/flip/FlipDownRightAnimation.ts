import { FlipAnimation, FlipAnimationProperties } from './FlipAnimation';

export class FlipDownRightAnimation extends FlipAnimation {
  constructor(properties: FlipAnimationProperties = {}) {
    super({
      xRotation: '-90°',
      yRotation: '90°',
      ...properties,
    });
  }
}
