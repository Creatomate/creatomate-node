import { TextWave, TextWaveProperties } from './TextWave';

export class TextWaveInLetterByLetterRandomly extends TextWave {
  constructor(properties: TextWaveProperties = {}) {
    super({
      split: 'letter',
      order: 'random',
      ...properties,
    });
  }
}
