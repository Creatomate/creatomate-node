import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideLeftLetterByLetterClipped extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'left',
      split: 'letter',
      scope: 'split-clip',
      ...properties,
    });
  }
}
