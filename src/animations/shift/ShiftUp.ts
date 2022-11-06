import { Shift, ShiftProperties } from './Shift';

export class ShiftUp extends Shift {
  constructor(properties: ShiftProperties = {}) {
    super({
      direction: 'up',
      ...properties,
    });
  }
}
