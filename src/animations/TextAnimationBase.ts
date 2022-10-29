import { AnimationBase, AnimationProperties } from './AnimationBase';

export interface TextAnimationProperties extends AnimationProperties {
  split?: 'line' | 'word' | 'letter';
  overlap?: number | string;
  order?: 'default' | 'reversed' | 'random';
  fade?: boolean;
}

export abstract class TextAnimationBase<T extends TextAnimationProperties> extends AnimationBase<T> {
}
