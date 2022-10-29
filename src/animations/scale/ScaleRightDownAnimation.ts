import { ScaleAnimation, ScaleAnimationProperties } from './ScaleAnimation';

export class ScaleRightDownAnimation extends ScaleAnimation {
  constructor(properties: ScaleAnimationProperties = {}) {
    super({
      xAnchor: '0%',
      yAnchor: '0%',
      ...properties,
    });
  }
}
