import { Spin, SpinProperties } from './Spin';

export class SpinHingeLeft extends Spin {
  constructor(properties: SpinProperties = {}) {
    super({
      scope: 'composition',
      rotation: '-22.5°',
      xAnchor: '0%',
      yAnchor: '50%',
      ...properties,
    });
  }
}
