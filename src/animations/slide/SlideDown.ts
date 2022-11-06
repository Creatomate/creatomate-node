import { Slide, SlideProperties } from './Slide';

export class SlideDown extends Slide {
  constructor(properties: SlideProperties = {}) {
    super({
      direction: '270°',
      ...properties,
    });
  }
}
