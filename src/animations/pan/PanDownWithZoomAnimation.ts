import { PanAnimation, PanAnimationProperties } from './PanAnimation';

export class PanDownWithZoomAnimation extends PanAnimation {
  constructor(properties: PanAnimationProperties = {}) {
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
