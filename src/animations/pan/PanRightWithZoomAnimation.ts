import { PanAnimation, PanAnimationProperties } from './PanAnimation';

export class PanRightWithZoomAnimation extends PanAnimation {
  constructor(properties: PanAnimationProperties = {}) {
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
