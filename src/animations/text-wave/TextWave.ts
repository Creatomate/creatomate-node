import { TextAnimationBase, TextAnimationProperties } from '../TextAnimationBase';

export interface TextWaveProperties extends TextAnimationProperties {
  distance?: number | string;
  frequency?: number | string;
  wavelength?: number | string;
}

export class TextWave extends TextAnimationBase<TextWaveProperties> {
  type = 'text-wave';

  constructor(properties: TextWaveProperties = {}) {
    super(properties);
  }
}
