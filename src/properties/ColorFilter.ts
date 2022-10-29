import { ColorFilterType } from './ColorFilterType';

export class ColorFilter {
  constructor(public type: ColorFilterType, public value: number | string) {}

  toMap(): Record<string, any> {
    return {
      color_filter: this.type,
      color_filter_value: this.value,
    };
  }
}
