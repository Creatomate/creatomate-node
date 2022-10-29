import { BounceAnimation, BounceAnimationProperties } from './BounceAnimation';

export class BounceTopRightAnimation extends BounceAnimation {
  constructor(properties: BounceAnimationProperties = {}) {
    super({
      xAnchor: '100%',
      yAnchor: '0%',
      ...properties,
    });
  }
}
