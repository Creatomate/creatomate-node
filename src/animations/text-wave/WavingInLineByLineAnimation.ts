import { TextWaveAnimation, TextWaveAnimationProperties } from './TextWaveAnimation';

export class WavingInLineByLineAnimation extends TextWaveAnimation {
  constructor(properties: TextWaveAnimationProperties = {}) {
    super({
      split: 'line',
      overlap: '50%',
      ...properties,
    });
  }
}
