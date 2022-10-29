import { PanAnimation, PanAnimationProperties } from './PanAnimation';

export class PanRightDownAnimation extends PanAnimation {
  constructor(properties: PanAnimationProperties = {}) {
    super({
      scope: 'element',
      startX: '0%',
      startY: '0%',
      endX: '100%',
      endY: '100%',
      ...properties,
    });
  }
}
