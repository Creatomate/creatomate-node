import { Fill, FlowDirection, Stroke, StrokeCap, StrokeJoin, ValueOrKeyframes } from '../properties';
import { ElementBase, ElementProperties } from './ElementBase';

export interface CompositionProperties extends ElementProperties {
  /**
   * The direction in which relatively positioned elements are laid out.
   */
  flowDirection?: ValueOrKeyframes<FlowDirection>;

  /**
   * Set to true to loop the content of the composition.
   */
  loop?: ValueOrKeyframes<boolean>;

  /**
   * Use this with loop to set the number of repetitions. Keep it at null to loop indefinitely.
   */
  plays?: ValueOrKeyframes<number>;

  /**
   * The fill.
   */
  fill?: ValueOrKeyframes<Fill>;

  /**
   * The fill color of the element. It may be a string or an array of color stops if fillMode is set to linear or
   * radial. Use the template designer to see how color stops are formatted.
   */
  fillColor?: ValueOrKeyframes<string>;

  /**
   * The fill method used: solid, linear, and radial.
   */
  fillMode?: ValueOrKeyframes<string>;

  /**
   * The start position of the gradient on the x-axis. Use with fillMode linear or radial.
   */
  fillX0?: ValueOrKeyframes<number | string>;

  /**
   * The start position of the gradient on the y-axis. Use with fillMode linear or radial.
   */
  fillY0?: ValueOrKeyframes<number | string>;

  /**
   * The end position of the gradient on the x-axis. Use with fillMode linear or radial.
   */
  fillX1?: ValueOrKeyframes<number | string>;

  /**
   * The end position of the gradient on the y-axis. Use with fillMode linear or radial.
   */
  fillY1?: ValueOrKeyframes<number | string>;

  /**
   * The radius of the radial gradient in relation to the element's max(width,height).
   */
  fillRadius?: ValueOrKeyframes<number | string>;

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
   * The start of the stroke relative to its total length.
   */
  strokeStart?: ValueOrKeyframes<number | string>;

  /**
   * The end of the stroke relative to its total length.
   */
  strokeEnd?: ValueOrKeyframes<number | string>;

  /**
   * The offset of the stroke relative to its total length.
   */
  strokeOffset?: ValueOrKeyframes<number | string>;

  /**
   * The border radius of the element.
   */
  borderRadius?: ValueOrKeyframes<number | string>;

  /**
   * Elements that make up the composition.
   */
  elements?: Array<ElementBase<any> | Record<string, any>>;
}

export class Composition extends ElementBase<CompositionProperties> {
  type = 'composition';

  toMap(): Record<string, any> {
    return {
      ...super.toMap(),
      elements: this.properties.elements?.map((element) =>
        element instanceof ElementBase ? element.toMap() : element,
      ),
    };
  }
}
