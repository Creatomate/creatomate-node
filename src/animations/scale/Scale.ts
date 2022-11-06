import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface ScaleProperties extends AnimationProperties {
  scope?: 'composition' | 'element';
  axis?: 'x' | 'y' | 'both';
  startScale?: number | string;
  endScale?: number | string;
  xAnchor?: number | string;
  yAnchor?: number | string;
  fade?: boolean;
}

export class Scale extends AnimationBase<ScaleProperties> {
  type = 'scale';

  constructor(properties: ScaleProperties = {}) {
    super(properties);
  }
}
