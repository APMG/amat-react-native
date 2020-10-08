import { ComponentType } from 'react';
import { Node } from './prosemirror';
import { EmbeddedImage } from './image';

export enum BodyType {
  Web,
  AMP,
  Native,
  Minimal
}

export interface EmbeddedAssets {
  audio: object[];
  attachments: Attachment[];
  images: EmbeddedImage[];
  oembeds: Oembed[];
}

export interface Attachment {
  id: string;
  url: string;
  mime_type: string;
}

export interface Oembed {
  html: string;
  url: string;
  author_name: string;
  author_url: string;
  provider_url: string;
  provider_name: string;
  height: number | null;
  width: number | null;
  thumbnail_height?: number | null;
  thumbnail_width?: number | null;
  thumbnail_url?: string | null;
}

export interface Inner {
  key: string | number;
  props?: object;
  ref?: any | null;
  type?: ComponentType;
  components?: Components;
}

export interface Components {
  [key: string]: ComponentType<ApmComponentProps | MarkProps>;
}

export interface ApmComponentProps {
  key?: string | number;
  nodeData: Node;
  embedded: EmbeddedAssets;
  components: Components;
}

export interface MarkProps {
  inner: Inner;
  href?: string;
  title?: string;
}
