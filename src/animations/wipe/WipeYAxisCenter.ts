import { Wipe, WipeProperties } from './Wipe';

export class WipeYAxisCenter extends Wipe {
  constructor(properties: WipeProperties = {}) {
    super({
      xAnchor: '50%',
      startAngle: '90°',
      endAngle: '90°',
      ...properties,
    });
  }
}
