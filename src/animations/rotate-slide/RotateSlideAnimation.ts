import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface RotateSlideAnimationProperties extends AnimationProperties {
  direction?: 'left' | 'right' | 'up' | 'down';
  clockwise?: boolean;
  fade?: boolean;
}

export class RotateSlideAnimation extends AnimationBase<RotateSlideAnimationProperties> {
  type = 'rotate-slide';

  constructor(properties: RotateSlideAnimationProperties = {}) {
    super(properties);
  }
}
