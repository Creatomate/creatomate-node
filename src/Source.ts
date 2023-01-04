import { ElementBase } from './elements';
import { EmojiStyle, Fill, FontDefinition, GifQuality, OutputFormat, ValueOrKeyframes } from './properties';
import { transformObjectKeys, transformCamelToSnakeCase } from './utility';

export interface SourceProperties {
  /**
   * The output format of the render, which can be jpg, png, gif, or mp4.
   */
  outputFormat: OutputFormat;

  /**
   * Only for MP4 renders. Sets the constant rate factor (CRF) ranging from 17 to 51. Higher values result in smaller
   * files, but lower video quality. Defaults to 23.
   */
  crf?: number;

  /**
   * Only for GIF renders. With 'best', the GIF generation takes much longer, and the file size increases significantly.
   * Defaults to 'fast'.
   */
  gifQuality?: GifQuality;

  /**
   * Only for GIF renders. A number ranging from 0 to 200 indicating the compression level (30 means very light
   * compression, 200 means heavy compression). Defaults to 0.
   */
  gifCompression?: number;

  /**
   * The width of the output in pixels.
   */
  width?: number;

  /**
   * The height of the output in pixels.
   */
  height?: number;

  /**
   *  The frame rate of the rendered video, which can be 1 to 60 fps for mp4, and 1 to 15 for gif. Do not provide this
   *  parameter when rendering a jpg or png.
   */
  frameRate?: number;

  /**
   * The duration of the output in seconds.
   */
  duration?: number;

  /**
   * Only for GIF renders. Set to true to make the GIF repeat.
   */
  loop?: boolean;

  /**
   * If a snapshot image is desired, specify the time in seconds at which the snapshot should be taken.
   */
  snapshotTime?: number;

  /**
   * The style of the Emojis used in text elements. Can be set to 'facebook', 'google', 'twitter', or 'apple'.
   */
  emojiStyle?: EmojiStyle;

  /**
   * The background fill.
   */
  fill?: ValueOrKeyframes<Fill>;

  /**
   * The background fill color. It may be a string or an array of color stops if fillMode is set to linear or
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
   * The radius of the radial gradient in relation to the output's max(width,height).
   */
  fillRadius?: ValueOrKeyframes<number | string>;

  /**
   * Creatomate includes more than a thousand fonts from the Google Font project, but you can also import your own
   * custom font as WOF, OTF, or TTF. Provide them in this array.
   */
  fonts?: FontDefinition;

  /**
   * Elements that make up the render.
   */
  elements?: Array<ElementBase<any> | Record<string, any>>;
}

export class Source {
  constructor(public properties: SourceProperties) {
  }

  toMap(): Record<string, any> {
    return transformObjectKeys(transformCamelToSnakeCase, {
      ...this.properties,
      elements: this.properties.elements?.map((element) =>
        element instanceof ElementBase ? element.toMap() : element,
      ),
    });
  }
}
