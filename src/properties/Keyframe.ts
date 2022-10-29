import { Easing } from './Easing';

export class Keyframe<T> {
  constructor(public value: T, public time: number | 'start' | 'end', public easing?: Easing) {}
}

export type ValueOrKeyframes<T> = T | Array<Keyframe<T>>;
