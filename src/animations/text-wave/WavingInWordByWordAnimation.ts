import { TextWaveAnimation, TextWaveAnimationProperties } from './TextWaveAnimation';

export class WavingInWordByWordAnimation extends TextWaveAnimation {
  constructor(properties: TextWaveAnimationProperties = {}) {
    super({
      split: 'word',
      overlap: '50%',
      ...properties,
    });
  }
}
