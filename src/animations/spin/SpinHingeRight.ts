import { Spin, SpinProperties } from './Spin';

export class SpinHingeRight extends Spin {
  constructor(properties: SpinProperties = {}) {
    super({
      scope: 'composition',
      rotation: '22.5°',
      xAnchor: '100%',
      yAnchor: '50%',
      ...properties,
    });
  }
}
