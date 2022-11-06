import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideRightLineByLineClipped extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'right',
      split: 'line',
      scope: 'split-clip',
      ...properties,
    });
  }
}
