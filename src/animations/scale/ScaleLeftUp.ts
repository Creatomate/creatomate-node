import { Scale, ScaleProperties } from './Scale';

export class ScaleLeftUp extends Scale {
  constructor(properties: ScaleProperties = {}) {
    super({
      xAnchor: '100%',
      yAnchor: '100%',
      ...properties,
    });
  }
}
