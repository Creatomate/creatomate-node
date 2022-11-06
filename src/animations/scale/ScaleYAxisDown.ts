import { Scale, ScaleProperties } from './Scale';

export class ScaleYAxisDown extends Scale {
  constructor(properties: ScaleProperties = {}) {
    super({
      xAnchor: '50%',
      yAnchor: '0%',
      axis: 'y',
      ...properties,
    });
  }
}
