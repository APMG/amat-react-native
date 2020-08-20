export interface Doc {
    type: string;
    content: Node[];
}
export interface Node {
    type: string;
    attrs?: object;
    content: Node;
}
export interface TextNode {
    type: string;
    text: string;
}
export declare const NodeType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
