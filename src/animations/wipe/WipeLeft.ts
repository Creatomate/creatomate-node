import { Wipe, WipeProperties } from './Wipe';

export class WipeLeft extends Wipe {
  constructor(properties: WipeProperties = {}) {
    super({
      xAnchor: '100%',
      ...properties,
    });
  }
}
