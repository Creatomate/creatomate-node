import { Pan, PanProperties } from './Pan';

export class PanLeft extends Pan {
  constructor(properties: PanProperties = {}) {
    super({
      scope: 'element',
      startX: '100%',
      startY: '50%',
      endX: '0%',
      endY: '50%',
      ...properties,
    });
  }
}
