import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface ShakeProperties extends AnimationProperties {
  direction?: number | string;
  distance?: number | string;
  count?: number | string;
  frequency?: number | string;
  phase?: number | string;
  rampDuration?: number | string;
  randomness?: number | string;
}

export class Shake extends AnimationBase<ShakeProperties> {
  type = 'shake';

  constructor(properties: ShakeProperties = {}) {
    super(properties);
  }
}
