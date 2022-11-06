import { Spin, SpinProperties } from './Spin';

export class SpinClockwise extends Spin {
  constructor(properties: SpinProperties = {}) {
    super({
      rotation: '360°',
      ...properties,
    });
  }
}
