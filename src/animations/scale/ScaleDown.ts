import { Scale, ScaleProperties } from './Scale';

export class ScaleDown extends Scale {
  constructor(properties: ScaleProperties = {}) {
    super({
      xAnchor: '50%',
      yAnchor: '0%',
      ...properties,
    });
  }
}
