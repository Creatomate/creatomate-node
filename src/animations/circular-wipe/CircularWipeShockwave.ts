import { CircularWipe, CircularWipeProperties } from './CircularWipe';

export class CircularWipeShockwave extends CircularWipe {
  constructor(properties: CircularWipeProperties = {}) {
    super({
      ringColor: 'rgba(255, 255, 255, 0.5)',
      ringWidth: '50%',
      ...properties,
    });
  }
}
