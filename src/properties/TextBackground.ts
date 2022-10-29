export class TextBackground {
  constructor(
    public color: string,
    public xPadding?: number | string,
    public yPadding?: number | string,
    public borderRadius?: number | string,
    public alignThreshold?: number | string,
  ) {}

  toMap(): Record<string, any> {
    return {
      background_color: this.color,
      ...(this.xPadding != null ? { background_x_padding: this.xPadding } : {}),
      ...(this.yPadding != null ? { background_y_padding: this.yPadding } : {}),
      ...(this.borderRadius != null ? { background_border_radius: this.borderRadius } : {}),
      ...(this.alignThreshold != null ? { background_align_threshold: this.alignThreshold } : {}),
    };
  }
}
