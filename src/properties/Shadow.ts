export class Shadow {
  constructor(
    public color: string,
    public blur?: number | string,
    public x?: number | string,
    public y?: number | string,
  ) {}

  toMap(): Record<string, any> {
    return {
      shadow_color: this.color,
      ...(this.blur != null ? { shadow_blur: this.blur } : {}),
      ...(this.x != null ? { shadow_x: this.x } : {}),
      ...(this.y != null ? { shadow_y: this.y } : {}),
    };
  }
}
