import { Wipe, WipeProperties } from './Wipe';

export class WipeXAxisCenter extends Wipe {
  constructor(properties: WipeProperties = {}) {
    super({
      xAnchor: '50%',
      startAngle: '0°',
      endAngle: '0°',
      ...properties,
    });
  }
}
