import { Flip, FlipProperties } from './Flip';

export class FlipPage extends Flip {
  constructor(properties: FlipProperties = {}) {
    super({
      xRotation: '0°',
      yRotation: '90°',
      xAnchor: '0%',
      fade: false,
      ...properties,
    });
  }
}
