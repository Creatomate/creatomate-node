import { Flip, FlipProperties } from './Flip';

export class FlipDown extends Flip {
  constructor(properties: FlipProperties = {}) {
    super({
      xRotation: '-180°',
      yRotation: '0°',
      ...properties,
    });
  }
}
