import { Pan, PanProperties } from './Pan';

export class PanDownWithZoom extends Pan {
  constructor(properties: PanProperties = {}) {
    super({
      scope: 'element',
      startX: '50%',
      startY: '0%',
      startScale: '100%',
      endX: '50%',
      endY: '100%',
      endScale: '150%',
      ...properties,
    });
  }
}
