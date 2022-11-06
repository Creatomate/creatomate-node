import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideLeftLetterByLetter extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'left',
      split: 'letter',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
