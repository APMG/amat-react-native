import { FunctionComponent } from 'react';
export declare enum BodyType {
    Web = 0,
    AMP = 1,
    Native = 2,
    Minimal = 3
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
