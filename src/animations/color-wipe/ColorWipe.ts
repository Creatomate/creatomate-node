import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface ColorWipeProperties extends AnimationProperties {
  color?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
}

export class ColorWipe extends AnimationBase<ColorWipeProperties> {
  type = 'color-wipe';

  constructor(properties: ColorWipeProperties = {}) {
    super(properties);
  }
}
