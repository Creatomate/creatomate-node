import { Squash, SquashProperties } from './Squash';

export class SquashDown extends Squash {
  constructor(properties: SquashProperties = {}) {
    super({
      direction: 'down',
      ...properties,
    });
  }
}
