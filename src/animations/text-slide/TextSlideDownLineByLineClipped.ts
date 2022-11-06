import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideDownLineByLineClipped extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'down',
      split: 'line',
      scope: 'split-clip',
      ...properties,
    });
  }
}
