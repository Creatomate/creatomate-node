import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface PanProperties extends AnimationProperties {
  scope?: 'composition' | 'element';
  startScale?: number | string;
  startX?: number | string;
  startY?: number | string;
  endScale?: number | string;
  endX?: number | string;
  endY?: number | string;
}

export class Pan extends AnimationBase<PanProperties> {
  type = 'pan';

  constructor(properties: PanProperties = {}) {
    super(properties);
  }
}
