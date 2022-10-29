import { TextSpinAnimation, TextSpinAnimationProperties } from './TextSpinAnimation';

export class RollLettersChaoticRandomAnimation extends TextSpinAnimation {
  constructor(properties: TextSpinAnimationProperties = {}) {
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
