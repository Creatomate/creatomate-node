import { TextCounterAnimation, TextCounterAnimationProperties } from './TextCounterAnimation';

export class CountUpAnimation extends TextCounterAnimation {
  constructor(properties: TextCounterAnimationProperties = {}) {
    super({
      direction: 'up',
      ...properties,
    });
  }
}
