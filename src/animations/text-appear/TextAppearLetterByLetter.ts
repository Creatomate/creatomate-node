import { TextAppear, TextAppearProperties } from './TextAppear';

export class TextAppearLetterByLetter extends TextAppear {
  constructor(properties: TextAppearProperties = {}) {
    super({
      split: 'letter',
      ...properties,
    });
  }
}
