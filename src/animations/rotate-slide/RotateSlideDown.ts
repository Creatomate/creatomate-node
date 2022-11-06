import { RotateSlide, RotateSlideProperties } from './RotateSlide';

export class RotateSlideDown extends RotateSlide {
  constructor(properties: RotateSlideProperties = {}) {
    super({
      direction: 'down',
      ...properties,
    });
  }
}
