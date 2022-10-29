import { WipeAnimation, WipeAnimationProperties } from './WipeAnimation';

export class WipeDownAnimation extends WipeAnimation {
  constructor(properties: WipeAnimationProperties = {}) {
    super({
      xAnchor: '0%',
      startAngle: '270°',
      endAngle: '270°',
      ...properties,
    });
  }
}
