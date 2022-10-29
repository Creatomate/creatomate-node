import { SquashAnimation, SquashAnimationProperties } from './SquashAnimation';

export class SquashUpAnimation extends SquashAnimation {
  constructor(properties: SquashAnimationProperties = {}) {
    super({
      direction: 'up',
      ...properties,
    });
  }
}
