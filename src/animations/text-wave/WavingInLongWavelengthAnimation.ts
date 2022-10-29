import { TextWaveAnimation, TextWaveAnimationProperties } from './TextWaveAnimation';

export class WavingInLongWavelengthAnimation extends TextWaveAnimation {
  constructor(properties: TextWaveAnimationProperties = {}) {
    super({
      split: 'letter',
      overlap: '90%',
      frequency: '1 Hz',
      wavelength: '500%',
      ...properties,
    });
  }
}
