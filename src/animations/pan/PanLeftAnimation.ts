import { PanAnimation, PanAnimationProperties } from './PanAnimation';

export class PanLeftAnimation extends PanAnimation {
  constructor(properties: PanAnimationProperties = {}) {
    super({
      scope: 'element',
      startX: '100%',
      startY: '50%',
      endX: '0%',
      endY: '50%',
      ...properties,
    });
  }
}
