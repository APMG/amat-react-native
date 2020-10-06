import { AspectRatios } from './image';
export interface Doc {
    type: string;
    content: Node[];
}
export interface Node {
    type: string;
    attrs?: Attrs | ImageAttrs | CustomHtmlAttrs;
    content?: Node[];
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
export interface CustomHtmlAttrs extends Attrs {
    html: string;
    fallback_url: string;
    fallback_text: string;
}
export interface ImageAttrs extends Attrs {
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
export interface VideoAttrs extends Attrs {
    url: string;
    credit_url: string;
    credit_name: string;
    long_caption: string;
    fallback_text: string;
    short_caption: string;
}
export interface Anchor {
    anchor?: string;
    linkText?: string;
    level?: number;
}
export declare enum AspectRatioSlug {
    normal = "normal",
    portrait = "portrait",
    square = "square",
    thumbnail = "thumbnail",
    uncropped = "uncropped",
    widescreen = "widescreen"
}
export declare const NodeType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
