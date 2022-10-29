import { ScaleAnimation, ScaleAnimationProperties } from './ScaleAnimation';

export class ScaleXAxisRightAnimation extends ScaleAnimation {
  constructor(properties: ScaleAnimationProperties = {}) {
    super({
      xAnchor: '0%',
      yAnchor: '50%',
      axis: 'x',
      ...properties,
    });
  }
}
