import { TextAppearAnimation, TextAppearAnimationProperties } from './TextAppearAnimation';

export class AppearWordByWordAnimation extends TextAppearAnimation {
  constructor(properties: TextAppearAnimationProperties = {}) {
    super({
      split: 'word',
      ...properties,
    });
  }
}
