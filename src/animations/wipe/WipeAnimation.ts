import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface WipeAnimationProperties extends AnimationProperties {
  xAnchor?: number | string;
  startAngle?: number | string;
  endAngle?: number | string;
  clip?: 'both' | 'first-only' | 'second-only';
  fade?: boolean;
}

export class WipeAnimation extends AnimationBase<WipeAnimationProperties> {
  type = 'wipe';

  constructor(properties: WipeAnimationProperties = {}) {
    super(properties);
  }
}
