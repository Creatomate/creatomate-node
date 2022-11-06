import { Scale, ScaleProperties } from './Scale';

export class ScaleXAxisLeft extends Scale {
  constructor(properties: ScaleProperties = {}) {
    super({
      xAnchor: '100%',
      yAnchor: '50%',
      axis: 'x',
      ...properties,
    });
  }
}
