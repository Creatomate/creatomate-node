import { CircularWipe, CircularWipeProperties } from './CircularWipe';

export class CircularWipeDown extends CircularWipe {
  constructor(properties: CircularWipeProperties = {}) {
    super({
      yAnchor: '0%',
      ...properties,
    });
  }
}
