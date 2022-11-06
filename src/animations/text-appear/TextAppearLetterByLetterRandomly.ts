import { TextAppear, TextAppearProperties } from './TextAppear';

export class TextAppearLetterByLetterRandomly extends TextAppear {
  constructor(properties: TextAppearProperties = {}) {
    super({
      split: 'letter',
      order: 'random',
      ...properties,
    });
  }
}
