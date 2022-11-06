import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideDownWordByWordClipped extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'down',
      split: 'word',
      scope: 'split-clip',
      ...properties,
    });
  }
}
