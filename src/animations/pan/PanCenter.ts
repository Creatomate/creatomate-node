import { Pan, PanProperties } from './Pan';

export class PanCenter extends Pan {
  constructor(properties: PanProperties = {}) {
    super({
      scope: 'element',
      startX: '50%',
      startY: '50%',
      endX: '50%',
      endY: '50%',
      ...properties,
    });
  }
}
