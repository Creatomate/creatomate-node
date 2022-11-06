import { Scale, ScaleProperties } from './Scale';

export class ScaleXAxisRight extends Scale {
  constructor(properties: ScaleProperties = {}) {
    super({
      xAnchor: '0%',
      yAnchor: '50%',
      axis: 'x',
      ...properties,
    });
  }
}
