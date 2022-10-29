import { PanAnimation, PanAnimationProperties } from './PanAnimation';

export class PanLeftWithZoomAnimation extends PanAnimation {
  constructor(properties: PanAnimationProperties = {}) {
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
