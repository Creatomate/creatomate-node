import { CircularWipeAnimation, CircularWipeAnimationProperties } from './CircularWipeAnimation';

export class CircularWipeLeftAnimation extends CircularWipeAnimation {
  constructor(properties: CircularWipeAnimationProperties = {}) {
    super({
      xAnchor: '100%',
      ...properties,
    });
  }
}
