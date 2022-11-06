import { TextWave, TextWaveProperties } from './TextWave';

export class TextWaveInLineByLine extends TextWave {
  constructor(properties: TextWaveProperties = {}) {
    super({
      split: 'line',
      overlap: '50%',
      ...properties,
    });
  }
}
