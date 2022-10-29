import { TextFlyAnimation, TextFlyAnimationProperties } from './TextFlyAnimation';

export class FlyingInWordByWordAnimation extends TextFlyAnimation {
  constructor(properties: TextFlyAnimationProperties = {}) {
    super({
      split: 'word',
      ...properties,
    });
  }
}
