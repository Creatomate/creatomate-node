import { PanAnimation, PanAnimationProperties } from './PanAnimation';

export class PanCenterAnimation extends PanAnimation {
  constructor(properties: PanAnimationProperties = {}) {
    super({
      scope: 'element',
      startX: '50%',
      startY: '50%',
      endX: '50%',
      endY: '50%',
      ...properties,
    });
  }
}
