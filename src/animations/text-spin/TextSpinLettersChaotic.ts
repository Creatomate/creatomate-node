import { TextSpin, TextSpinProperties } from './TextSpin';

export class TextSpinLettersChaotic extends TextSpin {
  constructor(properties: TextSpinProperties = {}) {
    super({
      split: 'letter',
      distance: '200%',
      direction: 'down',
      easing: 'elastic-out',
      ...properties,
    });
  }
}
