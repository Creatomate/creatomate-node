import { TextSpin, TextSpinProperties } from './TextSpin';

export class TextSpinLettersChaoticRandomly extends TextSpin {
  constructor(properties: TextSpinProperties = {}) {
    super({
      split: 'letter',
      distance: '200%',
      direction: 'down',
      easing: 'elastic-out',
      order: 'random',
      ...properties,
    });
  }
}
