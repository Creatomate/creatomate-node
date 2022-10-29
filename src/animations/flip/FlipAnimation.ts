import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface FlipAnimationProperties extends AnimationProperties {
  xRotation?: number | string;
  yRotation?: number | string;
  xAnchor?: number | string;
  yAnchor?: number | string;
  backfaceVisible?: boolean;
  fade?: boolean;
}

export class FlipAnimation extends AnimationBase<FlipAnimationProperties> {
  type = 'flip';

  constructor(properties: FlipAnimationProperties = {}) {
    super(properties);
  }
}
