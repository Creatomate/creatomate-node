import { WipeAnimation, WipeAnimationProperties } from './WipeAnimation';

export class WipeUpAnimation extends WipeAnimation {
  constructor(properties: WipeAnimationProperties = {}) {
    super({
      xAnchor: '0%',
      startAngle: '90°',
      endAngle: '90°',
      ...properties,
    });
  }
}
