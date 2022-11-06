import { FilmRoll, FilmRollProperties } from './FilmRoll';

export class FilmRollRight extends FilmRoll {
  constructor(properties: FilmRollProperties = {}) {
    super({
      direction: 'right',
      ...properties,
    });
  }
}
