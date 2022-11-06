import { Scale, ScaleProperties } from './Scale';

export class ScaleYAxisUp extends Scale {
  constructor(properties: ScaleProperties = {}) {
    super({
      xAnchor: '50%',
      yAnchor: '100%',
      axis: 'y',
      ...properties,
    });
  }
}
