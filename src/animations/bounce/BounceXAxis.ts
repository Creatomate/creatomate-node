import { Bounce, BounceProperties } from './Bounce';

export class BounceXAxis extends Bounce {
  constructor(properties: BounceProperties = {}) {
    super({
      axis: 'x',
      ...properties,
    });
  }
}
