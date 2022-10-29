import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextSlideAnimationProperties extends TextAnimationProperties {
  scope?: 'composition' | 'element' | 'split' | 'split-clip';
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number | string;
  backgroundEffect?: 'disabled' | 'sliding' | 'scaling' | 'scaling-clip';
}

export class TextSlideAnimation extends TextAnimationBase<TextSlideAnimationProperties> {
  type = 'text-slide';

  constructor(properties: TextSlideAnimationProperties = {}) {
    super(properties);
  }
}
