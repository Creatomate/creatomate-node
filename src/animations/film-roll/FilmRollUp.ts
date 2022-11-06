import { FilmRoll, FilmRollProperties } from './FilmRoll';

export class FilmRollUp extends FilmRoll {
  constructor(properties: FilmRollProperties = {}) {
    super({
      direction: 'up',
      ...properties,
    });
  }
}
