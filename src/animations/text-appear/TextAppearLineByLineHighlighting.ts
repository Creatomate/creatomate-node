import { TextAppear, TextAppearProperties } from './TextAppear';

export class TextAppearLineByLineHighlighting extends TextAppear {
  constructor(properties: TextAppearProperties = {}) {
    super({
      split: 'line',
      startOpacity: '20%',
      ...properties,
    });
  }
}
