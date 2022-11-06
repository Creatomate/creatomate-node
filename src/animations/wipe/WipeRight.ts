import { Wipe, WipeProperties } from './Wipe';

export class WipeRight extends Wipe {
  constructor(properties: WipeProperties = {}) {
    super({
      xAnchor: '0%',
      ...properties,
    });
  }
}
