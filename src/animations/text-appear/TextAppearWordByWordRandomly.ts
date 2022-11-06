import { TextAppear, TextAppearProperties } from './TextAppear';

export class TextAppearWordByWordRandomly extends TextAppear {
  constructor(properties: TextAppearProperties = {}) {
    super({
      split: 'word',
      order: 'random',
      ...properties,
    });
  }
}
