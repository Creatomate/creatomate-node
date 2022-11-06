import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextSpinProperties extends TextAnimationProperties {
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number | string;
  rotation?: number | string;
  anchorX?: number | string;
  anchorY?: number | string;
}

export class TextSpin extends TextAnimationBase<TextSpinProperties> {
  type = 'text-spin';

  constructor(properties: TextSpinProperties = {}) {
    super(properties);
  }
}
