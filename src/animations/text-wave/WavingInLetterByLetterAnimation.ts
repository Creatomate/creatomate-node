import { TextWaveAnimation, TextWaveAnimationProperties } from './TextWaveAnimation';

export class WavingInLetterByLetterAnimation extends TextWaveAnimation {
  constructor(properties: TextWaveAnimationProperties = {}) {
    super({
      split: 'letter',
      overlap: '50%',
      ...properties,
    });
  }
}
