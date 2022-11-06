import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface BounceProperties extends AnimationProperties {
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

export class Bounce extends AnimationBase<BounceProperties> {
  type = 'bounce';

  constructor(properties: BounceProperties = {}) {
    super(properties);
  }
}
