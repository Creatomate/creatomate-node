import { SpinAnimation, SpinAnimationProperties } from './SpinAnimation';

export class SpinCounterclockwiseAnimation extends SpinAnimation {
  constructor(properties: SpinAnimationProperties = {}) {
    super({
      rotation: '-360°',
      ...properties,
    });
  }
}
