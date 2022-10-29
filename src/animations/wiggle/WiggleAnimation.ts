import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface WiggleAnimationProperties extends AnimationProperties {
  xRotation?: number | string;
  yRotation?: number | string;
  zRotation?: number | string;
  xAnchor?: number | string;
  yAnchor?: number | string;
  count?: number | string;
  frequency?: number | string;
  phase?: number | string;
  rampDuration?: number | string;
  randomness?: number | string;
}

export class WiggleAnimation extends AnimationBase<WiggleAnimationProperties> {
  type = 'wiggle';

  constructor(properties: WiggleAnimationProperties = {}) {
    super(properties);
  }
}
