import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextRevealProperties extends TextAnimationProperties {
  axis?: 'x' | 'y' | 'both';
  startReveal?: number | string;
  scope?: 'element' | 'text' | 'split';
  xAnchor?: number | string;
  yAnchor?: number | string;
}

export class TextReveal extends TextAnimationBase<TextRevealProperties> {
  type = 'text-reveal';

  constructor(properties: TextRevealProperties = {}) {
    super(properties);
  }
}
