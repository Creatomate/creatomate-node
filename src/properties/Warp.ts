import { WarpMode } from './WarpMode';
import { WarpPoint } from './WarpPoint';

export class Warp {
  constructor(public matrix: WarpPoint[][], public mode: WarpMode = 'default') {}

  static perspective(tl: WarpPoint, tr: WarpPoint, bl: WarpPoint, br: WarpPoint) {
    return new Warp(
      [
        [tl, tr],
        [bl, br],
      ],
      'perspective',
    );
  }

  toMap(): Record<string, any> {
    return {
      warp_mode: this.mode,
      warp_matrix: this.matrix,
    };
  }
}
