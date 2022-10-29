import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextFlyAnimationProperties extends TextAnimationProperties {
  perspective?: number | string;
}

export class TextFlyAnimation extends TextAnimationBase<TextFlyAnimationProperties> {
  type = 'text-fly';

  constructor(properties: TextFlyAnimationProperties = {}) {
    super(properties);
  }
}
