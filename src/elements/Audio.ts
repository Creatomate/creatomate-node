import { ElementBase, ElementProperties } from './ElementBase';

export interface AudioProperties extends ElementProperties {
  /**
   * Identical to duration from the common properties, but with the addition that it can be set to "media" to make the
   * element as long as the source audio clip.
   */
  duration?: number | string | 'media';

  /**
   * The URL of an audio clip (an mp3) you want to insert. If it was uploaded using the template editor, it may also be
   * its internal GUID.
   */
  source: string;

  /**
   * This optional parameter indicates whether to generate the audio using a third-party AI platform (such as ElevenLabs
   * or OpenAI). Refer to the template editor for details on setting up a provider.
   */
  provider?: string;

  /**
   * Trims the source audio clip to begin at the specified time (in seconds) rather than at the beginning of the audio
   * file.
   */
  trimStart?: number | string;

  /**
   * Trims the source audio clip so that it stops playing after the specified duration (in seconds) rather than at the
   * end of the clip.
   */
  trimDuration?: number | string;

  /**
   * When set to true, the audio clip starts over when it reaches the end.
   */
  loop?: boolean;

  /**
   * Adjusts the volume from 0% to 100%.
   */
  volume?: number | string;

  /**
   * Fades in the volume for the specified duration (in seconds) at the beginning of the audio clip.
   */
  audioFadeIn?: number | string;

  /**
   * Fades out the volume for the specified duration (in seconds) at the end of the audio clip.
   */
  audioFadeOut?: number | string;
}

export class Audio extends ElementBase<AudioProperties> {
  type = 'audio';
}
