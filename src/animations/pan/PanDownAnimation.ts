import { PanAnimation, PanAnimationProperties } from './PanAnimation';

export class PanDownAnimation extends PanAnimation {
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
