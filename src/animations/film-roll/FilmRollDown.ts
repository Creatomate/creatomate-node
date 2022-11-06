import { FilmRoll, FilmRollProperties } from './FilmRoll';

export class FilmRollDown extends FilmRoll {
  constructor(properties: FilmRollProperties = {}) {
    super({
      direction: 'down',
      ...properties,
    });
  }
}
