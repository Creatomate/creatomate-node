import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideUpWordByWord extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'up',
      split: 'word',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
