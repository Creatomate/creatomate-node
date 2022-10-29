import { TextFlyAnimation, TextFlyAnimationProperties } from './TextFlyAnimation';

export class FlyingInLineByLineAnimation extends TextFlyAnimation {
  constructor(properties: TextFlyAnimationProperties = {}) {
    super({
      split: 'line',
      ...properties,
    });
  }
}
