import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideRightLetterByLetterClipped extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'right',
      split: 'letter',
      scope: 'split-clip',
      ...properties,
    });
  }
}
