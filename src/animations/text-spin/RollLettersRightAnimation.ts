import { TextSpinAnimation, TextSpinAnimationProperties } from './TextSpinAnimation';

export class RollLettersRightAnimation extends TextSpinAnimation {
  constructor(properties: TextSpinAnimationProperties = {}) {
    super({
      split: 'letter',
      direction: 'right',
      ...properties,
    });
  }
}
