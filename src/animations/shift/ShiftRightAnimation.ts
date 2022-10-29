import { ShiftAnimation, ShiftAnimationProperties } from './ShiftAnimation';

export class ShiftRightAnimation extends ShiftAnimation {
  constructor(properties: ShiftAnimationProperties = {}) {
    super({
      direction: 'right',
      ...properties,
    });
  }
}
