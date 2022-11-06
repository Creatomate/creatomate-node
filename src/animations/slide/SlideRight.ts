import { Slide, SlideProperties } from './Slide';

export class SlideRight extends Slide {
  constructor(properties: SlideProperties = {}) {
    super({
      direction: '0°',
      ...properties,
    });
  }
}
