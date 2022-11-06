import { TextSpin, TextSpinProperties } from './TextSpin';

export class TextSpinLetters extends TextSpin {
  constructor(properties: TextSpinProperties = {}) {
    super({
      split: 'letter',
      distance: '0%',
      rotation: '360°',
      ...properties,
    });
  }
}
