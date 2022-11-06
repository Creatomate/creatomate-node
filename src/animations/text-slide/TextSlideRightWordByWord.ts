import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideRightWordByWord extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'right',
      split: 'word',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
