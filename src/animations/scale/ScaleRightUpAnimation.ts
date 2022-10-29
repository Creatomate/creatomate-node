import { ScaleAnimation, ScaleAnimationProperties } from './ScaleAnimation';

export class ScaleRightUpAnimation extends ScaleAnimation {
  constructor(properties: ScaleAnimationProperties = {}) {
    super({
      xAnchor: '0%',
      yAnchor: '100%',
      ...properties,
    });
  }
}
