import { ScaleAnimation, ScaleAnimationProperties } from './ScaleAnimation';

export class ScaleXAxisLeftAnimation extends ScaleAnimation {
  constructor(properties: ScaleAnimationProperties = {}) {
    super({
      xAnchor: '100%',
      yAnchor: '50%',
      axis: 'x',
      ...properties,
    });
  }
}
