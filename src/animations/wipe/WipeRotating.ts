import { WipeAnimation, WipeAnimationProperties } from './WipeAnimation';

export class WipeRotating extends WipeAnimation {
  constructor(properties: WipeAnimationProperties = {}) {
    super({
      xAnchor: '50%',
      startAngle: '90°',
      endAngle: '0°',
      ...properties,
    });
  }
}
