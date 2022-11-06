import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideLeftLineByLineClipped extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'left',
      split: 'line',
      scope: 'split-clip',
      ...properties,
    });
  }
}
