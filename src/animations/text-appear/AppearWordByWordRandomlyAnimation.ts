import { TextAppearAnimation, TextAppearAnimationProperties } from './TextAppearAnimation';

export class AppearWordByWordRandomlyAnimation extends TextAppearAnimation {
  constructor(properties: TextAppearAnimationProperties = {}) {
    super({
      split: 'word',
      order: 'random',
      ...properties,
    });
  }
}
