import { Scale, ScaleProperties } from './Scale';

export class ScaleRightDown extends Scale {
  constructor(properties: ScaleProperties = {}) {
    super({
      xAnchor: '0%',
      yAnchor: '0%',
      ...properties,
    });
  }
}
