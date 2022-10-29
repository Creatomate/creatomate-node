import { TextFlyAnimation, TextFlyAnimationProperties } from './TextFlyAnimation';

export class FlyingInLetterByLetterAnimation extends TextFlyAnimation {
  constructor(properties: TextFlyAnimationProperties = {}) {
    super({
      split: 'letter',
      ...properties,
    });
  }
}
