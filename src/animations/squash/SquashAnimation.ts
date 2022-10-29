import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface SquashAnimationProperties extends AnimationProperties {
  direction?: 'left' | 'right' | 'up' | 'down';
  fade?: boolean;
}

export class SquashAnimation extends AnimationBase<SquashAnimationProperties> {
  type = 'squash';

  constructor(properties: SquashAnimationProperties = {}) {
    super(properties);
  }
}
