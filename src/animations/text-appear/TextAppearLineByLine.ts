import { TextAppear, TextAppearProperties } from './TextAppear';

export class TextAppearLineByLine extends TextAppear {
  constructor(properties: TextAppearProperties = {}) {
    super({
      split: 'line',
      ...properties,
    });
  }
}
