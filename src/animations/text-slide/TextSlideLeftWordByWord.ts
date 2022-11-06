import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideLeftWordByWord extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'left',
      split: 'word',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
