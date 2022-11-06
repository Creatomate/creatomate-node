import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface ShiftProperties extends AnimationProperties {
  direction?: 'left' | 'right' | 'up' | 'down';
  repetitions?: number;
}

export class Shift extends AnimationBase<ShiftProperties> {
  type = 'shift';

  constructor(properties: ShiftProperties = {}) {
    super(properties);
  }
}
