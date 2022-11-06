import { TextSlide, TextSlideProperties } from './TextSlide';

export class TextSlideDownLetterByLetterClipped extends TextSlide {
  constructor(properties: TextSlideProperties = {}) {
    super({
      direction: 'down',
      split: 'letter',
      scope: 'split-clip',
      ...properties,
    });
  }
}
