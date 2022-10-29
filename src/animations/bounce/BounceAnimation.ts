import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface BounceAnimationProperties extends AnimationProperties {
  axis?: 'x' | 'y' | 'both';
  scale?: number | string;
  xAnchor?: number | string;
  yAnchor?: number | string;
  count?: number | string;
  frequency?: number | string;
  phase?: number | string;
  rampDuration?: number | string;
  randomness?: number | string;
}

export class BounceAnimation extends AnimationBase<BounceAnimationProperties> {
  type = 'bounce';

  constructor(properties: BounceAnimationProperties = {}) {
    super(properties);
  }
}
