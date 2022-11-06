import { TextSpin, TextSpinProperties } from './TextSpin';

export class TextSpinLettersUp extends TextSpin {
  constructor(properties: TextSpinProperties = {}) {
    super({
      split: 'letter',
      direction: 'up',
      ...properties,
    });
  }
}
