import { SpinAnimation, SpinAnimationProperties } from './SpinAnimation';

export class SpinHingeLeftAnimation extends SpinAnimation {
  constructor(properties: SpinAnimationProperties = {}) {
    super({
      scope: 'composition',
      rotation: '-22.5°',
      xAnchor: '0%',
      yAnchor: '50%',
      ...properties,
    });
  }
}
