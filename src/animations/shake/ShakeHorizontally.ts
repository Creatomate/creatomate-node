import { Shake, ShakeProperties } from './Shake';

export class ShakeHorizontally extends Shake {
  constructor(properties: ShakeProperties = {}) {
    super({
      direction: '0°',
      ...properties,
    });
  }
}
