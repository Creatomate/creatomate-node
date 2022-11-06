import { Pan, PanProperties } from './Pan';

export class PanRightUp extends Pan {
  constructor(properties: PanProperties = {}) {
    super({
      scope: 'element',
      startX: '0%',
      startY: '100%',
      endX: '100%',
      endY: '0%',
      ...properties,
    });
  }
}
