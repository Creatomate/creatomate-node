import { Wipe, WipeProperties } from './Wipe';

export class WipeDiagonal extends Wipe {
  constructor(properties: WipeProperties = {}) {
    super({
      startAngle: '45°',
      endAngle: '45°',
      ...properties,
    });
  }
}
