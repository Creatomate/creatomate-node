import { ShiftAnimation, ShiftAnimationProperties } from './ShiftAnimation';

export class ShiftLeftAnimation extends ShiftAnimation {
  constructor(properties: ShiftAnimationProperties = {}) {
    super({
      direction: 'left',
      ...properties,
    });
  }
}
