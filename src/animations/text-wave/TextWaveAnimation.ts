import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextWaveAnimationProperties extends TextAnimationProperties {
  distance?: number | string;
  frequency?: number | string;
  wavelength?: number | string;
}

export class TextWaveAnimation extends TextAnimationBase<TextWaveAnimationProperties> {
  type = 'text-wave';

  constructor(properties: TextWaveAnimationProperties = {}) {
    super(properties);
  }
}
