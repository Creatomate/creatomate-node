import { TextSpinAnimation, TextSpinAnimationProperties } from './TextSpinAnimation';

export class RollLettersChaoticAnimation extends TextSpinAnimation {
  constructor(properties: TextSpinAnimationProperties = {}) {
    super({
      split: 'letter',
      distance: '200%',
      direction: 'down',
      easing: 'elastic-out',
      ...properties,
    });
  }
}
