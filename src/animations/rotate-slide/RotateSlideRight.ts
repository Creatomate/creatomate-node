import { RotateSlide, RotateSlideProperties } from './RotateSlide';

export class RotateSlideRight extends RotateSlide {
  constructor(properties: RotateSlideProperties = {}) {
    super({
      direction: 'right',
      ...properties,
    });
  }
}
