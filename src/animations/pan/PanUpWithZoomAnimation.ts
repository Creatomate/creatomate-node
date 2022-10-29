import { PanAnimation, PanAnimationProperties } from './PanAnimation';

export class PanUpWithZoomAnimation extends PanAnimation {
  constructor(properties: PanAnimationProperties = {}) {
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
