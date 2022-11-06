import { Scale, ScaleProperties } from './Scale';

export class ScaleUp extends Scale {
  constructor(properties: ScaleProperties = {}) {
    super({
      xAnchor: '50%',
      yAnchor: '100%',
      ...properties,
    });
  }
}
