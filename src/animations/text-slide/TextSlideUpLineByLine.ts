import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideUpLineByLine extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'up',
      split: 'line',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
