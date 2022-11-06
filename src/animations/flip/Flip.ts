import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface FlipProperties extends AnimationProperties {
  xRotation?: number | string;
  yRotation?: number | string;
  xAnchor?: number | string;
  yAnchor?: number | string;
  backfaceVisible?: boolean;
  fade?: boolean;
}

export class Flip extends AnimationBase<FlipProperties> {
  type = 'flip';

  constructor(properties: FlipProperties = {}) {
    super(properties);
  }
}
