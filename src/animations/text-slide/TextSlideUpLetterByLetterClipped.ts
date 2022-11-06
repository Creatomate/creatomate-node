import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideUpLetterByLetterClipped extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'up',
      split: 'letter',
      scope: 'split-clip',
      ...properties,
    });
  }
}
