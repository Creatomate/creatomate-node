import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideLeftLineByLine extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'left',
      split: 'line',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
