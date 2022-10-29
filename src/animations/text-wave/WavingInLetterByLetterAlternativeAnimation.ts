import { TextWaveAnimation, TextWaveAnimationProperties } from './TextWaveAnimation';

export class WavingInLetterByLetterAlternativeAnimation extends TextWaveAnimation {
  constructor(properties: TextWaveAnimationProperties = {}) {
    super({
      split: 'letter',
      overlap: '90%',
      frequency: '1 Hz',
      ...properties,
    });
  }
}
