import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextTypewriterProperties extends TextAnimationProperties {
  typingStart?: number | string;
  typingDuration?: number | string;
  cursorFrequency?: number | string;
}

export class TextTypewriter extends TextAnimationBase<TextTypewriterProperties> {
  type = 'text-typewriter';

  constructor(properties: TextTypewriterProperties = {}) {
    super(properties);
  }
}
