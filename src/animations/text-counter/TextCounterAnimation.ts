import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextCounterAnimationProperties extends TextAnimationProperties {
  direction?: 'up' | 'down';
  countingStart?: number | string;
  countingDuration?: number | string;
}

export class TextCounterAnimation extends TextAnimationBase<TextCounterAnimationProperties> {
  type = 'text-counter';

  constructor(properties: TextCounterAnimationProperties = {}) {
    super(properties);
  }
}
