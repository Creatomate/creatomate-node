import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface ShakeAnimationProperties extends AnimationProperties {
  direction?: number | string;
  distance?: number | string;
  count?: number | string;
  frequency?: number | string;
  phase?: number | string;
  rampDuration?: number | string;
  randomness?: number | string;
}

export class ShakeAnimation extends AnimationBase<ShakeAnimationProperties> {
  type = 'shake';

  constructor(properties: ShakeAnimationProperties = {}) {
    super(properties);
  }
}
