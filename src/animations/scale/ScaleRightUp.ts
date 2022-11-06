import { Scale, ScaleProperties } from './Scale';

export class ScaleRightUp extends Scale {
  constructor(properties: ScaleProperties = {}) {
    super({
      xAnchor: '0%',
      yAnchor: '100%',
      ...properties,
    });
  }
}
