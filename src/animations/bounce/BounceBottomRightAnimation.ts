import { BounceAnimation, BounceAnimationProperties } from './BounceAnimation';

export class BounceBottomRightAnimation extends BounceAnimation {
  constructor(properties: BounceAnimationProperties = {}) {
    super({
      xAnchor: '100%',
      yAnchor: '100%',
      ...properties,
    });
  }
}
