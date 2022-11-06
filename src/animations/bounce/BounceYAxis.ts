import { Bounce, BounceProperties } from './Bounce';

export class BounceYAxis extends Bounce {
  constructor(properties: BounceProperties = {}) {
    super({
      axis: 'y',
      ...properties,
    });
  }
}
