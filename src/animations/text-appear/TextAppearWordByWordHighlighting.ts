import { TextAppear, TextAppearProperties } from './TextAppear';

export class TextAppearWordByWordHighlighting extends TextAppear {
  constructor(properties: TextAppearProperties = {}) {
    super({
      split: 'word',
      startOpacity: '20%',
      ...properties,
    });
  }
}
