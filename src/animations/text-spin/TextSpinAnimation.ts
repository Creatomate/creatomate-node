import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextSpinAnimationProperties extends TextAnimationProperties {
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number | string;
  rotation?: number | string;
  anchorX?: number | string;
  anchorY?: number | string;
}

export class TextSpinAnimation extends TextAnimationBase<TextSpinAnimationProperties> {
  type = 'text-spin';

  constructor(properties: TextSpinAnimationProperties = {}) {
    super(properties);
  }
}
