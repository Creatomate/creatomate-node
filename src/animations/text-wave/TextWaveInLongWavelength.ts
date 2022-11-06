import { TextWave, TextWaveProperties } from './TextWave';

export class TextWaveInLongWavelength extends TextWave {
  constructor(properties: TextWaveProperties = {}) {
    super({
      split: 'letter',
      overlap: '90%',
      frequency: '1 Hz',
      wavelength: '500%',
      ...properties,
    });
  }
}
