import { FilmRollAnimation, FilmRollAnimationProperties } from './FilmRollAnimation';

export class FilmRollDownAnimation extends FilmRollAnimation {
  constructor(properties: FilmRollAnimationProperties = {}) {
    super({
      direction: 'down',
      ...properties,
    });
  }
}
