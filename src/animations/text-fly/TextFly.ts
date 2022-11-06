import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextFlyProperties extends TextAnimationProperties {
  perspective?: number | string;
}

export class TextFly extends TextAnimationBase<TextFlyProperties> {
  type = 'text-fly';

  constructor(properties: TextFlyProperties = {}) {
    super(properties);
  }
}
