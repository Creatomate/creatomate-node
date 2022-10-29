import { TextTypewriterAnimation, TextTypewriterAnimationProperties } from './TextTypewriterAnimation';

export class TextTypewritingFixedDurationAnimation extends TextTypewriterAnimation {
  constructor(properties: TextTypewriterAnimationProperties = {}) {
    super({
      typingStart: '0 s',
      typingDuration: '0.5 s',
      ...properties,
    });
  }
}
