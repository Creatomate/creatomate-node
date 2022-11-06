import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideDownLineByLine extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'down',
      split: 'line',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
