import {
  Fill,
  Font,
  Stroke,
  StrokeCap,
  StrokeJoin,
  TextBackground,
  TextTransform,
  TranscriptEffect,
  TranscriptPlacement,
  TranscriptSplit,
  ValueOrKeyframes,
} from '../properties';
import { ElementBase, ElementProperties } from './ElementBase';

export interface TextProperties extends ElementProperties {
  /**
   * The text displayed in the element.
   */
  text?: ValueOrKeyframes<string>;

  /**
   * The font used to render the text.
   */
  font?: ValueOrKeyframes<Font>;

  /**
   * The font family used to render the text. You can define your own custom fonts at the top of the template.
   */
  fontFamily?: ValueOrKeyframes<string>;

  /**
   * The font's weight.
   */
  fontWeight?: ValueOrKeyframes<number | string>;

  /**
   * The font's style (e.g., italics).
   */
  fontStyle?: ValueOrKeyframes<string>;

  /**
   * Use this property to set a fixed font size, or keep it at null if you want the font size to be automatically sized
   * based on the available space.
   */
  fontSize?: ValueOrKeyframes<number | string>;

  /**
   * Use this property to specify the minimum font size when the text is auto-sized.
   */
  fontSizeMinimum?: ValueOrKeyframes<number | string>;

  /**
   * Use this property to specify the maximum font size when the text is auto-sized.
   */
  fontSizeMaximum?: ValueOrKeyframes<number | string>;

  /**
   * The text's letter spacing as a percentage of the font size.
   */
  letterSpacing?: ValueOrKeyframes<number | string>;

  /**
   * The text's line height as a percentage of the font size.
   */
  lineHeight?: ValueOrKeyframes<number | string>;

  /**
   * If this is set to false, text will not wrap to the next line when there isn't enough space available in the
   * element.
   */
  textWrap?: ValueOrKeyframes<boolean>;

  /**
   * Set this to true to clip off text that overflows the element's borders. An ellipsis (...) will be displayed if the
   * text is clipped off. If you do not want to display an ellipsis, use the common property clip instead.
   */
  textClip?: ValueOrKeyframes<boolean>;

  /**
   * A transformation applied to the text content. It can be set to none, lowercase or uppercase.
   */
  textTransform?: ValueOrKeyframes<TextTransform>;

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
   * The text background.
   */
  background?: ValueOrKeyframes<TextBackground>;

  /**
   * The text background color.
   */
  backgroundColor?: ValueOrKeyframes<string>;

  /**
   * Horizontal padding added to the text background as a percentage of the font size.
   */
  backgroundXPadding?: ValueOrKeyframes<number | string>;

  /**
   * Vertical padding added to the text background as a percentage of the font size.
   */
  backgroundYPadding?: ValueOrKeyframes<number | string>;

  /**
   * Border radius of the text background.
   */
  backgroundBorderRadius?: ValueOrKeyframes<number | string>;

  /**
   * You can use this threshold to align the text background with other text lines. It is a percentage of the element's
   * width. A value of 0% disables alignment.
   */
  backgroundAlignThreshold?: ValueOrKeyframes<number | string>;

  /**
   * To use auto-transcription for this text element, set it to the ID of the video element for which subtitles are to
   * be generated.
   */
  transcriptSource?: string;

  /**
   * The transcript effect: color, karaoke, highlight, fade, bounce, slide, or enlarge.
   */
  transcriptEffect?: TranscriptEffect;

  /**
   * The transcript split: none, word, or line.
   */
  transcriptSplit?: TranscriptSplit;

  /**
   * The transcript placement: static, animate, or align.
   */
  transcriptPlacement?: TranscriptPlacement;

  /**
   * The maximum number of characters shown simultaneously.
   */
  transcriptMaximumLength?: number;

  /**
   * The color applied to the currently spoken text (word or line). Use this in conjunction with "transcriptSplit".
   */
  transcriptColor?: string;
}

export class Text extends ElementBase<TextProperties> {
  type = 'text';
}
