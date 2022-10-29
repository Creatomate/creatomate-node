import { SpinAnimation, SpinAnimationProperties } from './SpinAnimation';

export class SpinHingeRightAnimation extends SpinAnimation {
  constructor(properties: SpinAnimationProperties = {}) {
    super({
      scope: 'composition',
      rotation: '22.5°',
      xAnchor: '100%',
      yAnchor: '50%',
      ...properties,
    });
  }
}
