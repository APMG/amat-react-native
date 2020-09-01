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

export interface InnerProps {
  key: any;
}
