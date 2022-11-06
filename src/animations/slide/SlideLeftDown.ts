import { Slide, SlideProperties } from './Slide';

export class SlideLeftDown extends Slide {
  constructor(properties: SlideProperties = {}) {
    super({
      direction: '225°',
      ...properties,
    });
  }
}
