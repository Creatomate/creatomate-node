import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideRightLineByLine extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'right',
      split: 'line',
      scope: 'element',
      distance: '200%',
      backgroundEffect: 'disabled',
      ...properties,
    });
  }
}
