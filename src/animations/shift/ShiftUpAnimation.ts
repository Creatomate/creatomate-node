import { ShiftAnimation, ShiftAnimationProperties } from './ShiftAnimation';

export class ShiftUpAnimation extends ShiftAnimation {
  constructor(properties: ShiftAnimationProperties = {}) {
    super({
      direction: 'up',
      ...properties,
    });
  }
}
