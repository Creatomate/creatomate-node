import { Spin, SpinProperties } from './Spin';

export class SpinCounterclockwise extends Spin {
  constructor(properties: SpinProperties = {}) {
    super({
      rotation: '-360°',
      ...properties,
    });
  }
}
