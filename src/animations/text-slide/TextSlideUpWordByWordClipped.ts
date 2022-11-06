import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideUpWordByWordClipped extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'up',
      split: 'word',
      scope: 'split-clip',
      ...properties,
    });
  }
}
