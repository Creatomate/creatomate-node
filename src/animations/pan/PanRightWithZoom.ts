import { Pan, PanProperties } from './Pan';

export class PanRightWithZoom extends Pan {
  constructor(properties: PanProperties = {}) {
    super({
      scope: 'element',
      startX: '0%',
      startY: '50%',
      startScale: '100%',
      endX: '100%',
      endY: '50%',
      endScale: '150%',
      ...properties,
    });
  }
}
