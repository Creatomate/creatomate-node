import { CircularWipeAnimation, CircularWipeAnimationProperties } from './CircularWipeAnimation';

export class CircularWipeUpAnimation extends CircularWipeAnimation {
  constructor(properties: CircularWipeAnimationProperties = {}) {
    super({
      yAnchor: '100%',
      ...properties,
    });
  }
}
