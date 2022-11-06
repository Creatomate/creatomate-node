import { FilmRoll, FilmRollProperties } from './FilmRoll';

export class FilmRollLeft extends FilmRoll {
  constructor(properties: FilmRollProperties = {}) {
    super({
      direction: 'left',
      ...properties,
    });
  }
}
