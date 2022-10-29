import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface PanAnimationProperties extends AnimationProperties {
  scope?: 'composition' | 'element';
  startScale?: number | string;
  startX?: number | string;
  startY?: number | string;
  endScale?: number | string;
  endX?: number | string;
  endY?: number | string;
}

export class PanAnimation extends AnimationBase<PanAnimationProperties> {
  type = 'pan';

  constructor(properties: PanAnimationProperties = {}) {
    super(properties);
  }
}
