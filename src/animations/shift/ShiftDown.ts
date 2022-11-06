import { Shift, ShiftProperties } from './Shift';

export class ShiftDown extends Shift {
  constructor(properties: ShiftProperties = {}) {
    super({
      direction: 'down',
      ...properties,
    });
  }
}
