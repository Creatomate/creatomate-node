import { ScaleAnimation, ScaleAnimationProperties } from './ScaleAnimation';

export class ScaleYAxisDownAnimation extends ScaleAnimation {
  constructor(properties: ScaleAnimationProperties = {}) {
    super({
      xAnchor: '50%',
      yAnchor: '0%',
      axis: 'y',
      ...properties,
    });
  }
}
