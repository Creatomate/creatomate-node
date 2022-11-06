import { Slide, SlideProperties } from './Slide';

export class SlideLeftUp extends Slide {
  constructor(properties: SlideProperties = {}) {
    super({
      direction: '135°',
      ...properties,
    });
  }
}
