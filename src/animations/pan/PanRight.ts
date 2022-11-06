import { Pan, PanProperties } from './Pan';

export class PanRight extends Pan {
  constructor(properties: PanProperties = {}) {
    super({
      scope: 'element',
      startX: '0%',
      startY: '50%',
      endX: '100%',
      endY: '50%',
      ...properties,
    });
  }
}
