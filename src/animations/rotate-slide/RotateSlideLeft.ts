import { RotateSlide, RotateSlideProperties } from './RotateSlide';

export class RotateSlideLeft extends RotateSlide {
  constructor(properties: RotateSlideProperties = {}) {
    super({
      direction: 'left',
      ...properties,
    });
  }
}
