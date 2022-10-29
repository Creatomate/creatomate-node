import { PanAnimation, PanAnimationProperties } from './PanAnimation';

export class PanRightAnimation extends PanAnimation {
  constructor(properties: PanAnimationProperties = {}) {
    super({
      scope: 'element',
      startX: '0%',
      startY: '50%',
      endX: '100%',
      endY: '50%',
      ...properties,
    });
  }
}
