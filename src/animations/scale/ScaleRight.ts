import { Scale, ScaleProperties } from './Scale';

export class ScaleRight extends Scale {
  constructor(properties: ScaleProperties = {}) {
    super({
      xAnchor: '0%',
      yAnchor: '50%',
      ...properties,
    });
  }
}
