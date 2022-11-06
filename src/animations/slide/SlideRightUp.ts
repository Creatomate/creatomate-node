import { Slide, SlideProperties } from './Slide';

export class SlideRightUp extends Slide {
  constructor(properties: SlideProperties = {}) {
    super({
      direction: '45°',
      ...properties,
    });
  }
}
