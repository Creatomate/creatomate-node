import { Wipe, WipeProperties } from './Wipe';

export class WipeUp extends Wipe {
  constructor(properties: WipeProperties = {}) {
    super({
      xAnchor: '0%',
      startAngle: '90°',
      endAngle: '90°',
      ...properties,
    });
  }
}
