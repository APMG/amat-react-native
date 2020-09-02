import { FunctionComponent } from 'react';
import { Node } from './prosemirror';

export enum BodyType {
  Web,
  AMP,
  Native,
  Minimal
}

export interface EmbeddedAssets {
  audio: object;
  attachments: object;
  images: object;
  oembeds: object;
}

export interface Inner {
  key: string;
  props?: object;
  ref?: any | null;
  type?: FunctionComponent;
}
