import { TextAppearAnimation, TextAppearAnimationProperties } from './TextAppearAnimation';

export class AppearLineByLineRandomlyAnimation extends TextAppearAnimation {
  constructor(properties: TextAppearAnimationProperties = {}) {
    super({
      split: 'line',
      order: 'random',
      ...properties,
    });
  }
}
