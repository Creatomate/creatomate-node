import { CircularWipe, CircularWipeProperties } from './CircularWipe';

export class CircularWipeRight extends CircularWipe {
  constructor(properties: CircularWipeProperties = {}) {
    super({
      xAnchor: '0%',
      ...properties,
    });
  }
}
