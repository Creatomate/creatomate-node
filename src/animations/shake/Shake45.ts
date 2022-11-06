import { Shake, ShakeProperties } from './Shake';

export class Shake45 extends Shake {
  constructor(properties: ShakeProperties = {}) {
    super({
      direction: '45°',
      ...properties,
    });
  }
}
