import { TextCounter, TextCounterProperties } from './TextCounter';

export class TextCountDown extends TextCounter {
  constructor(properties: TextCounterProperties = {}) {
    super({
      direction: 'down',
      ...properties,
    });
  }
}
