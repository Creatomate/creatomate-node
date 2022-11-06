import { TextAppear, TextAppearProperties } from './TextAppear';

export class TextAppearLetterByLetterHighlighting extends TextAppear {
  constructor(properties: TextAppearProperties = {}) {
    super({
      split: 'letter',
      startOpacity: '20%',
      ...properties,
    });
  }
}
