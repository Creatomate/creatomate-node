import { Bounce, BounceProperties } from './Bounce';

export class BounceBottomRight extends Bounce {
  constructor(properties: BounceProperties = {}) {
    super({
      xAnchor: '100%',
      yAnchor: '100%',
      ...properties,
    });
  }
}
