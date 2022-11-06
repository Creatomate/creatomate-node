import { Bounce, BounceProperties } from './Bounce';

export class BounceBottomLeft extends Bounce {
  constructor(properties: BounceProperties = {}) {
    super({
      xAnchor: '0%',
      yAnchor: '100%',
      ...properties,
    });
  }
}
