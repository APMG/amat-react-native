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
    level: string;
}
export declare const NodeType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
export {};
