import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideUpLetterByLetter extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'up',
      split: 'letter',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
