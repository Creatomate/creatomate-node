import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface CircularWipeProperties extends AnimationProperties {
  ringColor?: string;
  ringWidth?: number | string;
  scope?: 'composition' | 'elements';
  xAnchor?: number | string;
  yAnchor?: number | string;
  clip?: 'both' | 'first-only' | 'second-only';
  fade?: boolean;
}

export class CircularWipe extends AnimationBase<CircularWipeProperties> {
  type = 'circular-wipe';

  constructor(properties: CircularWipeProperties = {}) {
    super(properties);
  }
}
