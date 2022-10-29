export class Font {
  constructor(
    public family: string,
    public weight?: number,
    public style?: string,
    public size?: number | string,
    public minimum?: number | string,
    public maximum?: number | string,
  ) {}

  toMap(): Record<string, any> {
    return {
      font_family: this.family,
      ...(this.weight != null ? { font_weight: this.weight } : {}),
      ...(this.style != null ? { font_style: this.style } : {}),
      ...(this.size != null ? { font_size: this.size } : {}),
      ...(this.minimum != null ? { font_size_minimum: this.minimum } : {}),
      ...(this.maximum != null ? { font_size_maximum: this.maximum } : {}),
    };
  }
}
