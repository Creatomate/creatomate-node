import { BounceAnimation, BounceAnimationProperties } from './BounceAnimation';

export class BounceXAxisAnimation extends BounceAnimation {
  constructor(properties: BounceAnimationProperties = {}) {
    super({
      axis: 'x',
      ...properties,
    });
  }
}
