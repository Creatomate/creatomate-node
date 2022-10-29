import { TextAppearAnimation, TextAppearAnimationProperties } from './TextAppearAnimation';

export class AppearLineByLineHighlightingAnimation extends TextAppearAnimation {
  constructor(properties: TextAppearAnimationProperties = {}) {
    super({
      split: 'line',
      startOpacity: '20%',
      ...properties,
    });
  }
}
