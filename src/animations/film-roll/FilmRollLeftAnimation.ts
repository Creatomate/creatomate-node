import { FilmRollAnimation, FilmRollAnimationProperties } from './FilmRollAnimation';

export class FilmRollLeftAnimation extends FilmRollAnimation {
  constructor(properties: FilmRollAnimationProperties = {}) {
    super({
      direction: 'left',
      ...properties,
    });
  }
}
