import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextRevealAnimationProperties extends TextAnimationProperties {
  axis?: 'x' | 'y' | 'both';
  startReveal?: number | string;
  scope?: 'element' | 'text' | 'split';
  xAnchor?: number | string;
  yAnchor?: number | string;
}

export class TextRevealAnimation extends TextAnimationBase<TextRevealAnimationProperties> {
  type = 'text-reveal';

  constructor(properties: TextRevealAnimationProperties = {}) {
    super(properties);
  }
}
