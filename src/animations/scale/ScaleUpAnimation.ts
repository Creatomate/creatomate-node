import { ScaleAnimation, ScaleAnimationProperties } from './ScaleAnimation';

export class ScaleUpAnimation extends ScaleAnimation {
  constructor(properties: ScaleAnimationProperties = {}) {
    super({
      xAnchor: '50%',
      yAnchor: '100%',
      ...properties,
    });
  }
}
