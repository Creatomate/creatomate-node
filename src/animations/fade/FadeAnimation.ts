import { AnimationBase, AnimationProperties } from '../AnimationBase';

export class FadeAnimation extends AnimationBase<AnimationProperties> {
  type = 'fade';

  constructor(properties: AnimationProperties = {}) {
    super(properties);
  }
}
