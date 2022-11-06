import { TextWave, TextWaveProperties } from './TextWave';

export class TextWaveInWordByWord extends TextWave {
  constructor(properties: TextWaveProperties = {}) {
    super({
      split: 'word',
      overlap: '50%',
      ...properties,
    });
  }
}
