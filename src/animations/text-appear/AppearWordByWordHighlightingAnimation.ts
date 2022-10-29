import { TextAppearAnimation, TextAppearAnimationProperties } from './TextAppearAnimation';

export class AppearWordByWordHighlightingAnimation extends TextAppearAnimation {
  constructor(properties: TextAppearAnimationProperties = {}) {
    super({
      split: 'word',
      startOpacity: '20%',
      ...properties,
    });
  }
}
