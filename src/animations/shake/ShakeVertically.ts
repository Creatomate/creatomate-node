import { Shake, ShakeProperties } from './Shake';

export class ShakeVertically extends Shake {
  constructor(properties: ShakeProperties = {}) {
    super({
      direction: '90°',
      ...properties,
    });
  }
}
