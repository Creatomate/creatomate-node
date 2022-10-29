import { BlurMode } from './BlurMode';

export class Blur {
  constructor(public radius: number, public mode?: BlurMode) {}

  toMap(): Record<string, any> {
    return {
      blur_radius: this.radius,
      ...(this.mode != null ? { blur_mode: this.mode } : {}),
    };
  }
}
