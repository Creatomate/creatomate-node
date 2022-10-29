import { PanAnimation, PanAnimationProperties } from './PanAnimation';

export class PanLeftDownAnimation extends PanAnimation {
  constructor(properties: PanAnimationProperties = {}) {
    super({
      scope: 'element',
      startX: '100%',
      startY: '0%',
      endX: '0%',
      endY: '100%',
      ...properties,
    });
  }
}
