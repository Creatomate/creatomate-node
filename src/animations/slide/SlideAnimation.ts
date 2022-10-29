import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface SlideAnimationProperties extends AnimationProperties {
  scope?: 'composition' | 'element';
  direction?: number | string;
  distance?: number | string;
  fixed?: 'none' | 'first-only' | 'second-only';
  fade?: boolean;
}

export class SlideAnimation extends AnimationBase<SlideAnimationProperties> {
  type = 'slide';

  constructor(properties: SlideAnimationProperties = {}) {
    super(properties);
  }
}
