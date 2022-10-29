import { WipeAnimation, WipeAnimationProperties } from './WipeAnimation';

export class WipeXAxisCenter extends WipeAnimation {
  constructor(properties: WipeAnimationProperties = {}) {
    super({
      xAnchor: '50%',
      startAngle: '0°',
      endAngle: '0°',
      ...properties,
    });
  }
}
