import { Slide, SlideProperties } from './Slide';

export class SlideRightDown extends Slide {
  constructor(properties: SlideProperties = {}) {
    super({
      direction: '315°',
      ...properties,
    });
  }
}
