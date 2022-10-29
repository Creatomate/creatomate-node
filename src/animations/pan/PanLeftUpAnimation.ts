import { PanAnimation, PanAnimationProperties } from './PanAnimation';

export class PanLeftUpAnimation extends PanAnimation {
  constructor(properties: PanAnimationProperties = {}) {
    super({
      scope: 'element',
      startX: '100%',
      startY: '100%',
      endX: '0%',
      endY: '0%',
      ...properties,
    });
  }
}
