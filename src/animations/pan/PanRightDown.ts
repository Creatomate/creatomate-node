import { Pan, PanProperties } from './Pan';

export class PanRightDown extends Pan {
  constructor(properties: PanProperties = {}) {
    super({
      scope: 'element',
      startX: '0%',
      startY: '0%',
      endX: '100%',
      endY: '100%',
      ...properties,
    });
  }
}
