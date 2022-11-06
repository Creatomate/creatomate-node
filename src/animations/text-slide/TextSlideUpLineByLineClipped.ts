import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideUpLineByLineClipped extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'up',
      split: 'line',
      scope: 'split-clip',
      ...properties,
    });
  }
}
