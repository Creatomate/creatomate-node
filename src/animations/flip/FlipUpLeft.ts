import { Flip, FlipProperties } from './Flip';

export class FlipUpLeft extends Flip {
  constructor(properties: FlipProperties = {}) {
    super({
      xRotation: '90°',
      yRotation: '-90°',
      ...properties,
    });
  }
}
