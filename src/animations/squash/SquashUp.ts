import { Squash, SquashProperties } from './Squash';

export class SquashUp extends Squash {
  constructor(properties: SquashProperties = {}) {
    super({
      direction: 'up',
      ...properties,
    });
  }
}
