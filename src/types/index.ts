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
  attachments: object[];
  images: EmbeddedImage[];
  oembeds: object[];
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
