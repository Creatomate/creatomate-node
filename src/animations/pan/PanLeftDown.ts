import { Pan, PanProperties } from './Pan';

export class PanLeftDown extends Pan {
  constructor(properties: PanProperties = {}) {
    super({
      scope: 'element',
      startX: '100%',
      startY: '0%',
      endX: '0%',
      endY: '100%',
      ...properties,
    });
  }
}
