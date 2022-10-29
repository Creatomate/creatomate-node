import { SquashAnimation, SquashAnimationProperties } from './SquashAnimation';

export class SquashLeftAnimation extends SquashAnimation {
  constructor(properties: SquashAnimationProperties = {}) {
    super({
      direction: 'left',
      ...properties,
    });
  }
}
