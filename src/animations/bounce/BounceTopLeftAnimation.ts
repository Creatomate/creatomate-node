import { BounceAnimation, BounceAnimationProperties } from './BounceAnimation';

export class BounceTopLeftAnimation extends BounceAnimation {
  constructor(properties: BounceAnimationProperties = {}) {
    super({
      xAnchor: '0%',
      yAnchor: '0%',
      ...properties,
    });
  }
}
