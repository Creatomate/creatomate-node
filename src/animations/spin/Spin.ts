import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface SpinProperties extends AnimationProperties {
  scope?: 'composition' | 'element';
  rotation?: number | string;
  xAnchor?: number | string;
  yAnchor?: number | string;
  fade?: boolean;
}

export class Spin extends AnimationBase<SpinProperties> {
  type = 'spin';

  constructor(properties: SpinProperties = {}) {
    super(properties);
  }
}
