import { CircularWipe, CircularWipeProperties } from './CircularWipe';

export class CircularWipeLeft extends CircularWipe {
  constructor(properties: CircularWipeProperties = {}) {
    super({
      xAnchor: '100%',
      ...properties,
    });
  }
}
