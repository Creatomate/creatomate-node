import { TextAppear, TextAppearProperties } from './TextAppear';

export class TextAppearLineByLineRandomly extends TextAppear {
  constructor(properties: TextAppearProperties = {}) {
    super({
      split: 'line',
      order: 'random',
      ...properties,
    });
  }
}
