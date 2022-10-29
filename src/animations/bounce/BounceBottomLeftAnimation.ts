import { BounceAnimation, BounceAnimationProperties } from './BounceAnimation';

export class BounceBottomLeftAnimation extends BounceAnimation {
  constructor(properties: BounceAnimationProperties = {}) {
    super({
      xAnchor: '0%',
      yAnchor: '100%',
      ...properties,
    });
  }
}
