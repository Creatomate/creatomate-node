import { Pan, PanProperties } from './Pan';

export class PanUp extends Pan {
  constructor(properties: PanProperties = {}) {
    super({
      scope: 'element',
      startX: '50%',
      startY: '100%',
      endX: '50%',
      endY: '0%',
      ...properties,
    });
  }
}
