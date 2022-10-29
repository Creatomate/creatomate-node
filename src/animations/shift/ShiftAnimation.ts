import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface ShiftAnimationProperties extends AnimationProperties {
  direction?: 'left' | 'right' | 'up' | 'down';
  repetitions?: number;
}

export class ShiftAnimation extends AnimationBase<ShiftAnimationProperties> {
  type = 'shift';

  constructor(properties: ShiftAnimationProperties = {}) {
    super(properties);
  }
}
