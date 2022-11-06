import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextCounterProperties extends TextAnimationProperties {
  direction?: 'up' | 'down';
  countingStart?: number | string;
  countingDuration?: number | string;
}

export class TextCounter extends TextAnimationBase<TextCounterProperties> {
  type = 'text-counter';

  constructor(properties: TextCounterProperties = {}) {
    super(properties);
  }
}
