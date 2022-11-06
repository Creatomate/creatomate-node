import { Bounce, BounceProperties } from './Bounce';

export class BounceTopLeft extends Bounce {
  constructor(properties: BounceProperties = {}) {
    super({
      xAnchor: '0%',
      yAnchor: '0%',
      ...properties,
    });
  }
}
