import { TextAppearAnimation, TextAppearAnimationProperties } from './TextAppearAnimation';

export class AppearLetterByLetterRandomlyAnimation extends TextAppearAnimation {
  constructor(properties: TextAppearAnimationProperties = {}) {
    super({
      split: 'letter',
      order: 'random',
      ...properties,
    });
  }
}
