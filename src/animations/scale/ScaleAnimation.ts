import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface ScaleAnimationProperties extends AnimationProperties {
  scope?: 'composition' | 'element';
  axis?: 'x' | 'y' | 'both';
  startScale?: number | string;
  endScale?: number | string;
  xAnchor?: number | string;
  yAnchor?: number | string;
  fade?: boolean;
}

export class ScaleAnimation extends AnimationBase<ScaleAnimationProperties> {
  type = 'scale';

  constructor(properties: ScaleAnimationProperties = {}) {
    super(properties);
  }
}
