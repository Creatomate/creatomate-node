import { ScaleAnimation, ScaleAnimationProperties } from './ScaleAnimation';

export class ScaleLeftUpAnimation extends ScaleAnimation {
  constructor(properties: ScaleAnimationProperties = {}) {
    super({
      xAnchor: '100%',
      yAnchor: '100%',
      ...properties,
    });
  }
}
