import { WipeAnimation, WipeAnimationProperties } from './WipeAnimation';

export class WipeYAxisCenter extends WipeAnimation {
  constructor(properties: WipeAnimationProperties = {}) {
    super({
      xAnchor: '50%',
      startAngle: '90°',
      endAngle: '90°',
      ...properties,
    });
  }
}
