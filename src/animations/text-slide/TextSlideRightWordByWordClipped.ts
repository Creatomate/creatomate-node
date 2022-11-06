import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideRightWordByWordClipped extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'right',
      split: 'word',
      scope: 'split-clip',
      ...properties,
    });
  }
}
