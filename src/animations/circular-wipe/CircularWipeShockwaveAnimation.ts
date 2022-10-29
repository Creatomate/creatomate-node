import { CircularWipeAnimation, CircularWipeAnimationProperties } from './CircularWipeAnimation';

export class CircularWipeShockwaveAnimation extends CircularWipeAnimation {
  constructor(properties: CircularWipeAnimationProperties = {}) {
    super({
      ringColor: 'rgba(255, 255, 255, 0.5)',
      ringWidth: '50%',
      ...properties,
    });
  }
}
