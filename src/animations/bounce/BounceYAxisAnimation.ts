import { BounceAnimation, BounceAnimationProperties } from './BounceAnimation';

export class BounceYAxisAnimation extends BounceAnimation {
  constructor(properties: BounceAnimationProperties = {}) {
    super({
      axis: 'y',
      ...properties,
    });
  }
}
