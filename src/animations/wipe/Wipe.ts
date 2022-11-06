import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface WipeProperties extends AnimationProperties {
  xAnchor?: number | string;
  startAngle?: number | string;
  endAngle?: number | string;
  clip?: 'both' | 'first-only' | 'second-only';
  fade?: boolean;
}

export class Wipe extends AnimationBase<WipeProperties> {
  type = 'wipe';

  constructor(properties: WipeProperties = {}) {
    super(properties);
  }
}
