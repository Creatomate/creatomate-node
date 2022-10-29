import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface SpinAnimationProperties extends AnimationProperties {
  scope?: 'composition' | 'element';
  rotation?: number | string;
  xAnchor?: number | string;
  yAnchor?: number | string;
  fade?: boolean;
}

export class SpinAnimation extends AnimationBase<SpinAnimationProperties> {
  type = 'spin';

  constructor(properties: SpinAnimationProperties = {}) {
    super(properties);
  }
}
