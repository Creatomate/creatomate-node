import { Wipe, WipeProperties } from './Wipe';

export class WipeDown extends Wipe {
  constructor(properties: WipeProperties = {}) {
    super({
      xAnchor: '0%',
      startAngle: '270°',
      endAngle: '270°',
      ...properties,
    });
  }
}
