import { StrokeCap } from './StrokeCap';
import { StrokeJoin } from './StrokeJoin';

export class Stroke {
  constructor(
    public color: string,
    public width?: number | string,
    public cap?: StrokeCap,
    public join?: StrokeJoin,
    public start?: number | string,
    public end?: number | string,
    public offset?: number | string,
  ) {}

  toMap(): Record<string, any> {
    return {
      stroke_color: this.color,
      ...(this.width != null ? { stroke_width: this.width } : {}),
      ...(this.cap != null ? { stroke_cap: this.cap } : {}),
      ...(this.join != null ? { stroke_join: this.join } : {}),
      ...(this.start != null ? { stroke_start: this.start } : {}),
      ...(this.end != null ? { stroke_end: this.end } : {}),
      ...(this.offset != null ? { stroke_offset: this.offset } : {}),
    };
  }
}
