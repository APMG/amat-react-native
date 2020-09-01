export interface Doc {
    type: string;
    content: Node[];
}
export interface Node {
    type: string;
    attrs?: object;
    content?: Node[];
    text?: string;
}
export declare const NodeType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
