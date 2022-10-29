import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextScaleAnimationProperties extends TextAnimationProperties {
  axis?: 'x' | 'y' | 'both';
  xAnchor?: number | string;
  yAnchor?: number | string;
}

export class TextScaleAnimation extends TextAnimationBase<TextScaleAnimationProperties> {
  type = 'text-scale';

  constructor(properties: TextScaleAnimationProperties = {}) {
    super(properties);
  }
}
