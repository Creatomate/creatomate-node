import { Shake, ShakeProperties } from './Shake';

export class Shake135 extends Shake {
  constructor(properties: ShakeProperties = {}) {
    super({
      direction: '135°',
      ...properties,
    });
  }
}
