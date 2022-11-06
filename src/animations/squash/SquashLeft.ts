import { Squash, SquashProperties } from './Squash';

export class SquashLeft extends Squash {
  constructor(properties: SquashProperties = {}) {
    super({
      direction: 'left',
      ...properties,
    });
  }
}
