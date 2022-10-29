import { FilmRollAnimation, FilmRollAnimationProperties } from './FilmRollAnimation';

export class FilmRollRightAnimation extends FilmRollAnimation {
  constructor(properties: FilmRollAnimationProperties = {}) {
    super({
      direction: 'right',
      ...properties,
    });
  }
}
