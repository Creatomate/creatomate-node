import { Slide, SlideProperties } from './Slide';

export class SlideUp extends Slide {
  constructor(properties: SlideProperties = {}) {
    super({
      direction: '90°',
      ...properties,
    });
  }
}
