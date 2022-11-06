import { TextTypewriter, TextTypewriterProperties } from './TextTypewriter';

export class TextTypewriterFixedDuration extends TextTypewriter {
  constructor(properties: TextTypewriterProperties = {}) {
    super({
      typingStart: '0 s',
      typingDuration: '0.5 s',
      ...properties,
    });
  }
}
