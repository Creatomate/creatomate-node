import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextAppearAnimationProperties extends TextAnimationProperties {
  startOpacity?: number | string;
  backgroundEffect?: 'disabled' | 'animated';
}

export class TextAppearAnimation extends TextAnimationBase<TextAppearAnimationProperties> {
  type = 'text-appear';

  constructor(properties: TextAppearAnimationProperties = {}) {
    super(properties);
  }
}
