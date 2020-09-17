export interface Doc {
    type: string;
    content: Node[];
}
export interface Node {
    type: string;
    attrs?: Attrs;
    content?: Node[];
    text?: string;
}
export interface TextNode {
    type: string;
    text: string;
}
interface Attrs {
    level?: string;
    custom_class?: string;
    number?: string;
    anchors?: Anchor[];
    prefix?: string;
    title?: string;
    url?: string;
    preferred_aspect_ratio_slug?: string;
}
interface Anchor {
    anchor?: string;
    linkText?: string;
    level?: number;
}
export declare const NodeType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
export {};
