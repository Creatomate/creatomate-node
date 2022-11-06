import { TextCounter, TextCounterProperties } from './TextCounter';

export class TextCountUp extends TextCounter {
  constructor(properties: TextCounterProperties = {}) {
    super({
      direction: 'up',
      ...properties,
    });
  }
}
