import { Shift, ShiftProperties } from './Shift';

export class ShiftLeft extends Shift {
  constructor(properties: ShiftProperties = {}) {
    super({
      direction: 'left',
      ...properties,
    });
  }
}
