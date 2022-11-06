import { Pan, PanProperties } from './Pan';

export class PanUpWithZoom extends Pan {
  constructor(properties: PanProperties = {}) {
    super({
      scope: 'element',
      startX: '50%',
      startY: '100%',
      startScale: '100%',
      endX: '50%',
      endY: '0%',
      endScale: '150%',
      ...properties,
    });
  }
}
