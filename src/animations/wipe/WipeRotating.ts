import { Wipe, WipeProperties } from './Wipe';

export class WipeRotating extends Wipe {
  constructor(properties: WipeProperties = {}) {
    super({
      xAnchor: '50%',
      startAngle: '90°',
      endAngle: '0°',
      ...properties,
    });
  }
}
