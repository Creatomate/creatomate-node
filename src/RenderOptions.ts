import { RenderOutputFormat } from './RenderOutputFormat';
import { Source } from './Source';

export interface RenderOptions {
  outputFormat?: RenderOutputFormat;
  frameRate?: number;
  renderScale?: number;
  maxWidth?: number;
  maxHeight?: number;
  templateId?: string;
  tags?: string[];
  source?: Source | Record<string, any>;
  modifications?: Record<string, string | number>;
  webhookUrl?: string;
  metadata?: string;
}
