import { TextAppear, TextAppearProperties } from './TextAppear';

export class TextAppearWordByWord extends TextAppear {
  constructor(properties: TextAppearProperties = {}) {
    super({
      split: 'word',
      ...properties,
    });
  }
}
