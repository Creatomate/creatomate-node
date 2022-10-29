import { RenderStatus } from './RenderStatus';

export interface Render {
  id: string;
  status: RenderStatus;
  errorMessage?: string;
  url: string;
  snapshotUrl?: string;
  templateId?: string;
  templateName?: string;
  templateTags?: string[];
  outputFormat: string;
  renderScale: number;
  width?: number;
  height?: number;
  frameRate?: number;
  duration?: number;
  fileSize?: number;
  modifications?: Record<string, any>;
  webhookUrl?: string;
  metadata?: string;
}
