import { FilmRollAnimation, FilmRollAnimationProperties } from './FilmRollAnimation';

export class FilmRollUpAnimation extends FilmRollAnimation {
  constructor(properties: FilmRollAnimationProperties = {}) {
    super({
      direction: 'up',
      ...properties,
    });
  }
}
