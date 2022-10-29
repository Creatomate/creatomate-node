import { WipeAnimation, WipeAnimationProperties } from './WipeAnimation';

export class WipeDiagonal extends WipeAnimation {
  constructor(properties: WipeAnimationProperties = {}) {
    super({
      startAngle: '45°',
      endAngle: '45°',
      ...properties,
    });
  }
}
