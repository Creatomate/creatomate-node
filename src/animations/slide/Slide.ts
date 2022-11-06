import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface SlideProperties extends AnimationProperties {
  scope?: 'composition' | 'element';
  direction?: number | string;
  distance?: number | string;
  fixed?: 'none' | 'first-only' | 'second-only';
  fade?: boolean;
}

export class Slide extends AnimationBase<SlideProperties> {
  type = 'slide';

  constructor(properties: SlideProperties = {}) {
    super(properties);
  }
}
