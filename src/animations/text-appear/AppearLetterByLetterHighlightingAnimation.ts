import { TextAppearAnimation, TextAppearAnimationProperties } from './TextAppearAnimation';

export class AppearLetterByLetterHighlightingAnimation extends TextAppearAnimation {
  constructor(properties: TextAppearAnimationProperties = {}) {
    super({
      split: 'letter',
      startOpacity: '20%',
      ...properties,
    });
  }
}
