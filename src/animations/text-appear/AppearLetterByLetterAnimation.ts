import { TextAppearAnimation, TextAppearAnimationProperties } from './TextAppearAnimation';

export class AppearLetterByLetterAnimation extends TextAppearAnimation {
  constructor(properties: TextAppearAnimationProperties = {}) {
    super({
      split: 'letter',
      ...properties,
    });
  }
}
