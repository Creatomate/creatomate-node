import { TextCounterAnimation, TextCounterAnimationProperties } from './TextCounterAnimation';

export class CountDownAnimation extends TextCounterAnimation {
  constructor(properties: TextCounterAnimationProperties = {}) {
    super({
      direction: 'down',
      ...properties,
    });
  }
}
