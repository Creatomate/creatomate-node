import { SquashAnimation, SquashAnimationProperties } from './SquashAnimation';

export class SquashDownAnimation extends SquashAnimation {
  constructor(properties: SquashAnimationProperties = {}) {
    super({
      direction: 'down',
      ...properties,
    });
  }
}
