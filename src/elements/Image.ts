import { Fit, Stroke, StrokeCap, StrokeJoin, ValueOrKeyframes } from '../properties';
import { ElementBase, ElementProperties } from './ElementBase';

export interface ImageProperties extends ElementProperties {
  /**
   * The URL of an image (a jpg, png, or svg) you want to display. If it was uploaded using the template editor, it may
   * also be its internal GUID.
   */
  source: string;

  /**
   * This optional parameter indicates whether to generate the image using a third-party AI platform (such as OpenAI or
   * Stability AI). Refer to the template editor for details on setting up a provider.
   */
  provider?: string;

  /**
   * This property specifies how the image should be resized to fit the element. It can be set to cover, contain, or
   * fill.
   */
  fit?: Fit;

  /**
   * Experimental feature. If smart cropping is enabled and fit is set to cover, an edge detection algorithm scans the
   * image to find the best cropping.
   */
  smartCrop?: boolean;

  /**
   * The stroke.
   */
  stroke?: ValueOrKeyframes<Stroke>;

  /**
   * The stroke color of the element.
   */
  strokeColor?: ValueOrKeyframes<string>;

  /**
   * The size of the stroke.
   */
  strokeWidth?: ValueOrKeyframes<number | string>;

  /**
   * The stroke cap: but, square, and round.
   */
  strokeCap?: ValueOrKeyframes<StrokeCap>;

  /**
   * The stroke join: miter, bevel, and round.
   */
  strokeJoin?: ValueOrKeyframes<StrokeJoin>;

  /**
   * The border radius of the element.
   */
  borderRadius?: ValueOrKeyframes<number | string>;
}

export class Image extends ElementBase<ImageProperties> {
  type = 'image';
}
