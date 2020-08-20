export interface Doc {
    type: string;
    content: Node[];
}
export interface Node {
    type: string;
    attrs: object;
    content: TextNode[];
}
export interface TextNode {
    type: string;
    text: string;
}
