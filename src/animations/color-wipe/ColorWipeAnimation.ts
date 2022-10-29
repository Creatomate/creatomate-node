import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface ColorWipeAnimationProperties extends AnimationProperties {
  color?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
}

export class ColorWipeAnimation extends AnimationBase<ColorWipeAnimationProperties> {
  type = 'color-wipe';

  constructor(properties: ColorWipeAnimationProperties = {}) {
    super(properties);
  }
}
