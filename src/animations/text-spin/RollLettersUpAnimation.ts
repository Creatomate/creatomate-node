import { TextSpinAnimation, TextSpinAnimationProperties } from './TextSpinAnimation';

export class RollLettersUpAnimation extends TextSpinAnimation {
  constructor(properties: TextSpinAnimationProperties = {}) {
    super({
      split: 'letter',
      direction: 'up',
      ...properties,
    });
  }
}
