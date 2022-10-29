import { FillMode } from './FillMode';
import { FillColorStop } from './FillColorStop';

export class Fill {
  constructor(
    public mode: FillMode,
    public x0?: number | string,
    public y0?: number | string,
    public x1?: number | string,
    public y1?: number | string,
    public radius?: number | string,
    public colorStops?: FillColorStop[] | string[],
  ) {}

  static solid(color: string) {
    return new Fill('solid', undefined, undefined, undefined, undefined, undefined, [color]);
  }

  static linear(
    x0: number | string,
    y0: number | string,
    x1: number | string,
    y1: number | string,
    colorStops: FillColorStop[] | string[],
  ) {
    return new Fill('linear', x0, y0, x1, y1, undefined, colorStops);
  }

  static horizontal(colorStops: FillColorStop[] | string[]) {
    return new Fill('linear', '0%', '50%', '100%', '50%', undefined, colorStops);
  }

  static vertical(colorStops: FillColorStop[] | string[]) {
    return new Fill('linear', '50%', '0%', '50%', '100%', undefined, colorStops);
  }

  static radial(
    x: number | string,
    y: number | string,
    radius: number | string,
    colorStops: FillColorStop[] | string[],
  ) {
    return new Fill('radial', x, y, undefined, undefined, radius, colorStops);
  }

  toMap(): Record<string, any> {
    let colorStops: FillColorStop[] = [];
    if (Array.isArray(this.colorStops) && this.colorStops.length >= 1) {
      if (typeof this.colorStops[0] === 'string') {
        if (this.colorStops.length > 1) {
          for (let i = 0; i < this.colorStops.length; i++) {
            colorStops.push({
              offset: `${(i / (this.colorStops.length - 1)) * 100}%`,
              color: this.colorStops[i].toString(),
            });
          }
        } else {
          colorStops.push({ offset: '0%', color: this.colorStops[0] });
        }
      } else {
        colorStops = this.colorStops as FillColorStop[];
      }
    }

    if (this.mode === 'solid') {
      return {
        fill_color: colorStops.length > 0 ? colorStops[0].color : undefined,
      };
    } else if (this.mode === 'linear') {
      return {
        fill_color: colorStops,
        fill_mode: this.mode,
        fill_x0: this.x0,
        fill_y0: this.y0,
        fill_x1: this.x1,
        fill_y1: this.y1,
      };
    } else {
      return {
        fill_color: colorStops,
        fill_mode: this.mode,
        fill_x0: this.x0,
        fill_y0: this.y0,
        radius: this.radius,
      };
    }
  }
}
