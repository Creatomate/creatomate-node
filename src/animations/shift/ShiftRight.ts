import { Shift, ShiftProperties } from './Shift';

export class ShiftRight extends Shift {
  constructor(properties: ShiftProperties = {}) {
    super({
      direction: 'right',
      ...properties,
    });
  }
}
