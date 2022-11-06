import { Bounce, BounceProperties } from './Bounce';

export class BounceTopRight extends Bounce {
  constructor(properties: BounceProperties = {}) {
    super({
      xAnchor: '100%',
      yAnchor: '0%',
      ...properties,
    });
  }
}
