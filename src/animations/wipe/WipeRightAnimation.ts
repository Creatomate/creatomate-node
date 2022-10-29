import { WipeAnimation, WipeAnimationProperties } from './WipeAnimation';

export class WipeRightAnimation extends WipeAnimation {
  constructor(properties: WipeAnimationProperties = {}) {
    super({
      xAnchor: '0%',
      ...properties,
    });
  }
}
