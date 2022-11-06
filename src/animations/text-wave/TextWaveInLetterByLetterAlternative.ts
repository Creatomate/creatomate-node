import { TextWave, TextWaveProperties } from './TextWave';

export class TextWaveInLetterByLetterAlternative extends TextWave {
  constructor(properties: TextWaveProperties = {}) {
    super({
      split: 'letter',
      overlap: '90%',
      frequency: '1 Hz',
      ...properties,
    });
  }
}
