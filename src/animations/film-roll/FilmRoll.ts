import { AnimationBase, AnimationProperties } from '../AnimationBase';

export interface FilmRollProperties extends AnimationProperties {
  direction?: 'left' | 'right' | 'up' | 'down';
  repetitions?: number;
  fade?: boolean;
}

export class FilmRoll extends AnimationBase<FilmRollProperties> {
  type = 'film-roll';

  constructor(properties: FilmRollProperties = {}) {
    super(properties);
  }
}
