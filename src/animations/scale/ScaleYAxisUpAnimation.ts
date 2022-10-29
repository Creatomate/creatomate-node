import { ScaleAnimation, ScaleAnimationProperties } from './ScaleAnimation';

export class ScaleYAxisUpAnimation extends ScaleAnimation {
  constructor(properties: ScaleAnimationProperties = {}) {
    super({
      xAnchor: '50%',
      yAnchor: '100%',
      axis: 'y',
      ...properties,
    });
  }
}
