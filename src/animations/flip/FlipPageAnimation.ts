import { FlipAnimation, FlipAnimationProperties } from './FlipAnimation';

export class FlipPageAnimation extends FlipAnimation {
  constructor(properties: FlipAnimationProperties = {}) {
    super({
      xRotation: '0°',
      yRotation: '90°',
      xAnchor: '0%',
      fade: false,
      ...properties,
    });
  }
}
