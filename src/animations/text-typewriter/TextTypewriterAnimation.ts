import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextTypewriterAnimationProperties extends TextAnimationProperties {
  typingStart?: number | string;
  typingDuration?: number | string;
  cursorFrequency?: number | string;
}

export class TextTypewriterAnimation extends TextAnimationBase<TextTypewriterAnimationProperties> {
  type = 'text-typewriter';

  constructor(properties: TextTypewriterAnimationProperties = {}) {
    super(properties);
  }
}
