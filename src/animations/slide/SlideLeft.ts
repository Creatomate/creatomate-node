import { Slide, SlideProperties } from './Slide';

export class SlideLeft extends Slide {
  constructor(properties: SlideProperties = {}) {
    super({
      direction: '180°',
      ...properties,
    });
  }
}
