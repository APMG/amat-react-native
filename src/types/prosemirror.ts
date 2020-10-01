import { AspectRatios } from './image';

export interface Doc {
  type: string;
  content: Node[]; // known in Prosemirror's docs as a "Fragment"
}

export interface Node {
  type: string;
  attrs?: Attrs | ImageAttrs;
  content?: Node[]; // woohoo recursion, it's like I'm back in CSCI 1901
  text?: string;
}

export interface TextNode {
  type: string;
  text: string;
}

export interface Attrs {
  level?: string;
  custom_class?: string;
  number?: string;
  anchors?: Anchor[];
  prefix?: string;
  title?: string;
  url?: string;
}

export interface ImageAttrs extends Attrs {
  type: 'apmImage';
  id: string;
  url: string;
  preferred_aspect_ratio_slug: AspectRatioSlug;
  short_caption: string;
  long_caption: string;
  float: string;
  width: string;
  credit: string;
  credit_url: string;
  aspect_ratios: AspectRatios;
}

export interface Anchor {
  anchor?: string;
  linkText?: string;
  level?: number;
}

export enum AspectRatioSlug {
  normal = 'normal',
  portrait = 'portrait',
  square = 'square',
  thumbnail = 'thumbnail',
  uncropped = 'uncropped',
  widescreen = 'widescreen'
}

export const NodeType = typeof Node;
