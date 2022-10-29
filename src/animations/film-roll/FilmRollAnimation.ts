import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface FilmRollAnimationProperties extends AnimationProperties {
  direction?: 'left' | 'right' | 'up' | 'down';
  repetitions?: number;
  fade?: boolean;
}

export class FilmRollAnimation extends AnimationBase<FilmRollAnimationProperties> {
  type = 'film-roll';

  constructor(properties: FilmRollAnimationProperties = {}) {
    super(properties);
  }
}
