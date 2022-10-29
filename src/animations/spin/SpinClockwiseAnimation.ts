import { SpinAnimation, SpinAnimationProperties } from './SpinAnimation';

export class SpinClockwiseAnimation extends SpinAnimation {
  constructor(properties: SpinAnimationProperties = {}) {
    super({
      rotation: '360°',
      ...properties,
    });
  }
}
