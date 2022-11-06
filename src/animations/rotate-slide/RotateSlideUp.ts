import { RotateSlide, RotateSlideProperties } from './RotateSlide';

export class RotateSlideUp extends RotateSlide {
  constructor(properties: RotateSlideProperties = {}) {
    super({
      direction: 'up',
      ...properties,
    });
  }
}
