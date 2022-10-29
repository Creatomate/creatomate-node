import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface CircularWipeAnimationProperties extends AnimationProperties {
  ringColor?: string;
  ringWidth?: number | string;
  scope?: 'composition' | 'elements';
  xAnchor?: number | string;
  yAnchor?: number | string;
  clip?: 'both' | 'first-only' | 'second-only';
  fade?: boolean;
}

export class CircularWipeAnimation extends AnimationBase<CircularWipeAnimationProperties> {
  type = 'circular-wipe';

  constructor(properties: CircularWipeAnimationProperties = {}) {
    super(properties);
  }
}
