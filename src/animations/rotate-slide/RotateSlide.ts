import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface RotateSlideProperties extends AnimationProperties {
  direction?: 'left' | 'right' | 'up' | 'down';
  clockwise?: boolean;
  fade?: boolean;
}

export class RotateSlide extends AnimationBase<RotateSlideProperties> {
  type = 'rotate-slide';

  constructor(properties: RotateSlideProperties = {}) {
    super(properties);
  }
}
