import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideDownLetterByLetter extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'down',
      split: 'letter',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
