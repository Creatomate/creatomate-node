import { CircularWipe, CircularWipeProperties } from './CircularWipe';

export class CircularWipeUp extends CircularWipe {
  constructor(properties: CircularWipeProperties = {}) {
    super({
      yAnchor: '100%',
      ...properties,
    });
  }
}
