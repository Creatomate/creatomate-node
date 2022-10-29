import { ScaleAnimation, ScaleAnimationProperties } from './ScaleAnimation';

export class ScaleLeftDownAnimation extends ScaleAnimation {
  constructor(properties: ScaleAnimationProperties = {}) {
    super({
      xAnchor: '100%',
      yAnchor: '0%',
      ...properties,
    });
  }
}
