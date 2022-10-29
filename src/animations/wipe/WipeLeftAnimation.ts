import { WipeAnimation, WipeAnimationProperties } from './WipeAnimation';

export class WipeLeftAnimation extends WipeAnimation {
  constructor(properties: WipeAnimationProperties = {}) {
    super({
      xAnchor: '100%',
      ...properties,
    });
  }
}
