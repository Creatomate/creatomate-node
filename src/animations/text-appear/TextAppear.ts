import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextAppearProperties extends TextAnimationProperties {
  startOpacity?: number | string;
  backgroundEffect?: 'disabled' | 'animated';
}

export class TextAppear extends TextAnimationBase<TextAppearProperties> {
  type = 'text-appear';

  constructor(properties: TextAppearProperties = {}) {
    super(properties);
  }
}
