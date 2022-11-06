import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextScaleProperties extends TextAnimationProperties {
  axis?: 'x' | 'y' | 'both';
  xAnchor?: number | string;
  yAnchor?: number | string;
}

export class TextScale extends TextAnimationBase<TextScaleProperties> {
  type = 'text-scale';

  constructor(properties: TextScaleProperties = {}) {
    super(properties);
  }
}
