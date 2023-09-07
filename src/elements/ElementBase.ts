import {
  BlendMode,
  Blur,
  BlurMode,
  ColorFilter,
  ColorFilterType,
  MaskMode,
  Shadow,
  ValueOrKeyframes,
  Warp,
  WarpMode,
  WarpPoint,
} from '../properties';
import { AnimationBase } from '../animations';
import { expandProperties, transformObjectKeys, transformCamelToSnakeCase } from '../utility';

export interface ElementProperties {
  /**
   * A unique identifier for this element.
   */
  id?: string;

  /**
   * The track number on which this element is placed. If you are rendering an image, you can leave this value undefined.
   */
  track?: number;

  /**
   * The time at which you want the element to appear within its composition.
   */
  time?: number | string;

  /**
   * The duration for which you would like the element to appear. When set to null, the element will be stretched until
   * the end of the composition or the beginning of the next element on the same track, whichever comes first.
   */
  duration?: number | string;

  /**
   * The x-axis position of the element in the composition.
   */
  x?: ValueOrKeyframes<number | string>;

  /**
   * The y-axis position of the element in the composition.
   */
  y?: ValueOrKeyframes<number | string>;

  /**
   * The width of the element in relation to the composition.
   */
  width?: ValueOrKeyframes<number | string>;

  /**
   * The height of the element in relation to the composition.
   */
  height?: ValueOrKeyframes<number | string>;

  /**
   * Using this property, the element will be constrained to a particular aspect ratio (width/height). A value of 1 is
   * square, a value of 1.6 is 16:10.
   */
  aspectRatio?: ValueOrKeyframes<number>;

  /**
   * Padding of the element on the horizontal axis.
   */
  xPadding?: ValueOrKeyframes<number | string>;

  /**
   * Padding of the element on the vertical axis.
   */
  yPadding?: ValueOrKeyframes<number | string>;

  /**
   * The order in which the elements are rendered. When set to null (the default), the element is rendered in the same
   * order in which it was defined.
   */
  zIndex?: ValueOrKeyframes<number>;

  /**
   * The element's origin from which its x-axis position, scale, rotate, and skew are applied.
   */
  xAnchor?: ValueOrKeyframes<number | string>;

  /**
   * The element's origin from which its y-axis position, scale, rotate, and skew are applied.
   */
  yAnchor?: ValueOrKeyframes<number | string>;

  /**
   * The horizontal scale transformation in percent.
   */
  xScale?: ValueOrKeyframes<number | string>;

  /**
   * The vertical scale transformation in percent.
   */
  yScale?: ValueOrKeyframes<number | string>;

  /**
   * The horizontal skew transformation in degrees.
   */
  xSkew?: ValueOrKeyframes<number | string>;

  /**
   * The vertical skew transformation in degrees.
   */
  ySkew?: ValueOrKeyframes<number | string>;

  /**
   * Rotates the element along the x-axis.
   */
  xRotation?: ValueOrKeyframes<number | string>;

  /**
   * Rotates the element along the y-axis.
   */
  yRotation?: ValueOrKeyframes<number | string>;

  /**
   * Rotates the element along the z-axis.
   */
  zRotation?: ValueOrKeyframes<number | string>;

  /**
   * The distance between the z=0 plane and the camera. Use it with the z rotation and y rotation. As this value
   * decreases, the 3D perspective effect will become stronger. If null, the perspective is calculated by the element's
   * dimensions.
   */
  perspective?: ValueOrKeyframes<number | string>;

  /**
   * Set to false to hide the backface of the element when rotated around its x and y axes.
   */
  backfaceVisible?: ValueOrKeyframes<boolean>;

  /**
   * The position of the element's content on the x-axis. It's often used with the aspect ratio parameter. Also used to
   * align text in text elements.
   */
  xAlignment?: ValueOrKeyframes<number | string>;

  /**
   * The position of the element's content on the y-axis. It's often used with the aspect ratio parameter. Also used to
   * align text in text elements.
   */
  yAlignment?: ValueOrKeyframes<number | string>;

  /**
   * The shadow.
   */
  shadow?: ValueOrKeyframes<Shadow>;

  /**
   * The shadow color, or null to disable it.
   */
  shadowColor?: ValueOrKeyframes<string>;

  /**
   * The blurriness of the shadow.
   */
  shadowBlur?: ValueOrKeyframes<number | string>;

  /**
   * The offset of the shadow on the x-axis.
   */
  shadowX?: ValueOrKeyframes<number | string>;

  /**
   * The offset of the shadow on the y-axis.
   */
  shadowY?: ValueOrKeyframes<number | string>;

  /**
   * When set to true, the element's content is clipped to its borders.
   */
  clip?: ValueOrKeyframes<boolean>;

  /**
   * The opacity of the element.
   */
  opacity?: ValueOrKeyframes<number | string>;

  /**
   * The blend mode of the element. These options are available: none, multiply, screen, overlay, darken, lighten,
   * color-dodge, color-burn, hard-light, soft-light, lighter, difference, exclusion, hue, saturation, color,
   * luminosity.
   */
  blendMode?: ValueOrKeyframes<BlendMode>;

  /**
   * The color filter that is applied to the element. These options are currently available: none, brighten, contrast,
   * invert, grayscale, and sepia.
   */
  colorFilter?: ValueOrKeyframes<ColorFilter | ColorFilterType>;

  /**
   * This parameter allows you to control the color filter, such as the intensity.
   */
  colorFilterValue?: ValueOrKeyframes<number>;

  /**
   * A color that is applied on top the element.
   */
  colorOverlay?: ValueOrKeyframes<string>;

  /**
   * The blur.
   */
  blur?: ValueOrKeyframes<Blur>;

  /**
   * The radius of the blur that is applied to the element.
   */
  blurRadius?: ValueOrKeyframes<number>;

  /**
   * The algorithm used to blur the element: stack, box, and box-2.
   */
  blurMode?: ValueOrKeyframes<BlurMode>;

  /**
   * By setting the mask mode, the element is used as a mask for the element one track below it. The options alpha and
   * alpha-inverted use the alpha channel of this element, and luma and luma-inverted use the luminance.
   */
  maskMode?: ValueOrKeyframes<MaskMode>;

  /**
   * When set to true, the element is repeated in its composition, acting as a fill pattern.
   */
  repeat?: ValueOrKeyframes<boolean>;

  /**
   * The warp.
   */
  warp?: ValueOrKeyframes<Warp>;

  /**
   * This parameter is used in conjunction with warp_matrix to apply a warp effect to the element. When set to default,
   * the warp is applied based on a grid of points. By choosing the perspective option, you can warp the element using a
   * 2 by 2 grid, similar to Adobe After Effects' "Perspective Corner Pin".
   */
  warpMode?: ValueOrKeyframes<WarpMode>;

  /**
   * Array of points that control the warp effect. For a better understanding of how it should be configured, use the
   * template designer.
   */
  warpMatrix?: ValueOrKeyframes<WarpPoint[][]>;

  /**
   * An animation used as transition between this and the previous element.
   */
  transition?: AnimationBase<any>;

  /**
   * An animation that is played at the start.
   */
  enter?: AnimationBase<any>;

  /**
   * An animation that is played at the end.
   */
  exit?: AnimationBase<any>;

  /**
   * An array of animation keyframes.
   */
  animations?: AnimationBase<any>[];
}

export abstract class ElementBase<T extends ElementProperties> {
  protected abstract type: string;

  constructor(public properties: T) {}

  toMap(): Record<string, any> {
    const { transition, enter, exit, animations, ...rest } = this.properties;

    const animationsMapped = Array.isArray(animations)
      ? [
          ...animations
            .filter((animation) => typeof animation?.toMap === 'function')
            .map((animation) => animation.toMap()),
        ]
      : [];

    if (transition) {
      animationsMapped.unshift({
        ...transition.toMap(),
        time: 'start',
        transition: true,
      });
    }

    if (enter) {
      animationsMapped.unshift({
        ...enter.toMap(),
        time: 'start',
      });
    }

    if (exit) {
      animationsMapped.push({
        ...exit.toMap(),
        time: 'end',
        reversed: true,
      });
    }

    return transformObjectKeys(transformCamelToSnakeCase, {
      type: this.type,
      ...expandProperties(rest),
      ...(animationsMapped.length > 0 ? { animations: animationsMapped } : {}),
    });
  }
}
