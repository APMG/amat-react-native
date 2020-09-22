import { AspectRatioSlug } from './prosemirror';

export interface EmbeddedImage {
  alt_text: string;
  aspect_ratios: AspectRatios;
  caption: string;
  content_area: string;
  credit: ImageCredit;
  date_created: string | null;
  date_taken: string | null;
  date_updated: string | null;
  dateline: string;
  fallback: string;
  guid: string;
  id: string;
  long_caption: string;
  preferred_aspect_ratio: AspectRatio;
  rights: object;
  short_caption: string;
  slug: string;
  status: string;
  tags: any[];
  thumbnail: AspectRatio;
  type: string;
}

export interface ImageCredit {
  name: string;
  url: string;
}

export interface AspectRatio {
  instances: AspectRatioInstance[];
  slug: AspectRatioSlug;
}

export type AspectRatios = {
  [key in AspectRatioSlug]?: AspectRatio;
};

export interface AspectRatioInstance {
  width: number;
  height: number;
  url: string;
}

export interface Rights {
  notes: string;
  redistributable: boolean;
  source: string;
}
