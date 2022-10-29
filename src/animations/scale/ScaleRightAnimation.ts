import { ScaleAnimation, ScaleAnimationProperties } from './ScaleAnimation';

export class ScaleRightAnimation extends ScaleAnimation {
  constructor(properties: ScaleAnimationProperties = {}) {
    super({
      xAnchor: '0%',
      yAnchor: '50%',
      ...properties,
    });
  }
}
