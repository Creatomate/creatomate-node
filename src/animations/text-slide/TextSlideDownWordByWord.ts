import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideDownWordByWord extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'down',
      split: 'word',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
