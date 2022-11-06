import { Pan, PanProperties } from './Pan';

export class PanLeftUp extends Pan {
  constructor(properties: PanProperties = {}) {
    super({
      scope: 'element',
      startX: '100%',
      startY: '100%',
      endX: '0%',
      endY: '0%',
      ...properties,
    });
  }
}
