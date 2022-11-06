import { TextWave, TextWaveProperties } from './TextWave';

export class TextWaveInLetterByLetter extends TextWave {
  constructor(properties: TextWaveProperties = {}) {
    super({
      split: 'letter',
      overlap: '50%',
      ...properties,
    });
  }
}
