import { CircularWipeAnimation, CircularWipeAnimationProperties } from './CircularWipeAnimation';

export class CircularWipeDownAnimation extends CircularWipeAnimation {
  constructor(properties: CircularWipeAnimationProperties = {}) {
    super({
      yAnchor: '0%',
      ...properties,
    });
  }
}
