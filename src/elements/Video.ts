import { Fit, Stroke, StrokeCap, StrokeJoin, ValueOrKeyframes } from '../properties';
import { ElementBase, ElementProperties } from './ElementBase';

export interface VideoProperties extends ElementProperties {
  /**
   * Identical to duration from the common properties, but with the addition that it can be set to "media" to make the
   * element as long as the source video.
   */
  duration?: number | 'media';

  /**
   * The URL of an video (an mp4) you want to display. If it was uploaded using the template editor, it may also be its
   * internal GUID.
   */
  source: ValueOrKeyframes<string>;

  /**
   * This property specifies how the video should be resized to fit the element. It can be set to cover, contain, or
   * fill.
   */
  fit?: Fit;

  /**
   * Trims the source video to begin at the specified time (in seconds) rather than at the beginning.
   */
  trimStart?: number;

  /**
   * Trims the source video so that it stops playing after the specified duration (in seconds) rather than at the end of
   * the source video.
   */
  trimEnd?: number;

  /**
   * When set to true, the video starts over when it reaches the end.
   */
  loop?: boolean;

  /**
   * When set to true, the audio track of the video is ignored.
   */
  muted?: boolean;

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

export class Video extends ElementBase<VideoProperties> {
  type = 'video';
}
