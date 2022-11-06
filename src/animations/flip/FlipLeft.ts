import { Flip, FlipProperties } from './Flip';

export class FlipLeft extends Flip {
  constructor(properties: FlipProperties = {}) {
    super({
      xRotation: '0°',
      yRotation: '-180°',
      ...properties,
    });
  }
}
