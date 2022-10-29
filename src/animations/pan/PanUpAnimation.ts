import { PanAnimation, PanAnimationProperties } from './PanAnimation';

export class PanUpAnimation extends PanAnimation {
  constructor(properties: PanAnimationProperties = {}) {
    super({
      scope: 'element',
      startX: '50%',
      startY: '100%',
      endX: '50%',
      endY: '0%',
      ...properties,
    });
  }
}
