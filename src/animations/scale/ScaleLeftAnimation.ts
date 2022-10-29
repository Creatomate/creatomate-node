import { ScaleAnimation, ScaleAnimationProperties } from './ScaleAnimation';

export class ScaleLeftAnimation extends ScaleAnimation {
  constructor(properties: ScaleAnimationProperties = {}) {
    super({
      xAnchor: '100%',
      yAnchor: '50%',
      ...properties,
    });
  }
}
