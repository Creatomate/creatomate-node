import { CircularWipeAnimation, CircularWipeAnimationProperties } from './CircularWipeAnimation';

export class CircularWipeRightAnimation extends CircularWipeAnimation {
  constructor(properties: CircularWipeAnimationProperties = {}) {
    super({
      xAnchor: '0%',
      ...properties,
    });
  }
}
