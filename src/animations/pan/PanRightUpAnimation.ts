import { PanAnimation, PanAnimationProperties } from './PanAnimation';

export class PanRightUpAnimation extends PanAnimation {
  constructor(properties: PanAnimationProperties = {}) {
    super({
      scope: 'element',
      startX: '0%',
      startY: '100%',
      endX: '100%',
      endY: '0%',
      ...properties,
    });
  }
}
