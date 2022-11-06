import { TextSpin, TextSpinProperties } from './TextSpin';

export class TextSpinLettersLeft extends TextSpin {
  constructor(properties: TextSpinProperties = {}) {
    super({
      split: 'letter',
      direction: 'left',
      ...properties,
    });
  }
}
