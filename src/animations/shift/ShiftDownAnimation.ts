import { ShiftAnimation, ShiftAnimationProperties } from './ShiftAnimation';

export class ShiftDownAnimation extends ShiftAnimation {
  constructor(properties: ShiftAnimationProperties = {}) {
    super({
      direction: 'down',
      ...properties,
    });
  }
}
