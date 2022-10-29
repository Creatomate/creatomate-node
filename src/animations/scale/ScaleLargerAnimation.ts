import { ScaleAnimation, ScaleAnimationProperties } from './ScaleAnimation';

export class ScaleLargerAnimation extends ScaleAnimation {
  constructor(properties: ScaleAnimationProperties = {}) {
    super({
      startScale: '100%',
      endScale: '150%',
      ...properties,
    });
  }
}
