import { SquashAnimation, SquashAnimationProperties } from './SquashAnimation';

export class SquashRightAnimation extends SquashAnimation {
  constructor(properties: SquashAnimationProperties = {}) {
    super({
      direction: 'right',
      ...properties,
    });
  }
}
