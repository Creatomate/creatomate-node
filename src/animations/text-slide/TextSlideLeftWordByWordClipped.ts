import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideLeftWordByWordClipped extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'left',
      split: 'word',
      scope: 'split-clip',
      ...properties,
    });
  }
}
