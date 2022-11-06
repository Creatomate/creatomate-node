import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface SquashProperties extends AnimationProperties {
  direction?: 'left' | 'right' | 'up' | 'down';
  fade?: boolean;
}

export class Squash extends AnimationBase<SquashProperties> {
  type = 'squash';

  constructor(properties: SquashProperties = {}) {
    super(properties);
  }
}
