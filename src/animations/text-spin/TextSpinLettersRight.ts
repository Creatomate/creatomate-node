import { TextSpin, TextSpinProperties } from './TextSpin';

export class TextSpinLettersRight extends TextSpin {
  constructor(properties: TextSpinProperties = {}) {
    super({
      split: 'letter',
      direction: 'right',
      ...properties,
    });
  }
}
