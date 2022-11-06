import { AnimationBase, AnimationProperties } from '../AnimationBase';

export class Fade extends AnimationBase<AnimationProperties> {
  type = 'fade';

  constructor(properties: AnimationProperties = {}) {
    super(properties);
  }
}
