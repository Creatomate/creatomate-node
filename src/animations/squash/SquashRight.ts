import { Squash, SquashProperties } from './Squash';

export class SquashRight extends Squash {
  constructor(properties: SquashProperties = {}) {
    super({
      direction: 'right',
      ...properties,
    });
  }
}
