import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextSlideProperties extends TextAnimationProperties {
  scope?: 'composition' | 'element' | 'split' | 'split-clip';
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number | string;
  backgroundEffect?: 'disabled' | 'sliding' | 'scaling' | 'scaling-clip';
}

export class TextSlide extends TextAnimationBase<TextSlideProperties> {
  type = 'text-slide';

  constructor(properties: TextSlideProperties = {}) {
    super(properties);
  }
}
