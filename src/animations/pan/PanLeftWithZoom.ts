import { Pan, PanProperties } from './Pan';

export class PanLeftWithZoom extends Pan {
  constructor(properties: PanProperties = {}) {
    super({
      scope: 'element',
      startX: '100%',
      startY: '50%',
      startScale: '100%',
      endX: '0%',
      endY: '50%',
      endScale: '150%',
      ...properties,
    });
  }
}
