import { TextSpin, TextSpinProperties } from './TextSpin';

export class TextSpinLettersDown extends TextSpin {
  constructor(properties: TextSpinProperties = {}) {
    super({
      split: 'letter',
      direction: 'down',
      ...properties,
    });
  }
}
