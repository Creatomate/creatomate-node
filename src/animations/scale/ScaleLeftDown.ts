import { Scale, ScaleProperties } from './Scale';

export class ScaleLeftDown extends Scale {
  constructor(properties: ScaleProperties = {}) {
    super({
      xAnchor: '100%',
      yAnchor: '0%',
      ...properties,
    });
  }
}
