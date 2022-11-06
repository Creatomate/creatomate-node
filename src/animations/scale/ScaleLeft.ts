import { Scale, ScaleProperties } from './Scale';

export class ScaleLeft extends Scale {
  constructor(properties: ScaleProperties = {}) {
    super({
      xAnchor: '100%',
      yAnchor: '50%',
      ...properties,
    });
  }
}
