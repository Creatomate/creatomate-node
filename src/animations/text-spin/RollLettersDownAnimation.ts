import { TextSpinAnimation, TextSpinAnimationProperties } from './TextSpinAnimation';

export class RollLettersDownAnimation extends TextSpinAnimation {
  constructor(properties: TextSpinAnimationProperties = {}) {
    super({
      split: 'letter',
      direction: 'down',
      ...properties,
    });
  }
}
