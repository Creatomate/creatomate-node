import { ScaleAnimation, ScaleAnimationProperties } from './ScaleAnimation';

export class ScaleDownAnimation extends ScaleAnimation {
  constructor(properties: ScaleAnimationProperties = {}) {
    super({
      xAnchor: '50%',
      yAnchor: '0%',
      ...properties,
    });
  }
}
