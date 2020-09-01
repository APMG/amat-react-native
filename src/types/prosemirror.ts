export interface Doc {
  type: string;
  content: Node[]; // known in Prosemirror's docs as a "Fragment"
}

export interface Node {
  type: string;
  attrs?: object;
  //content?: Node | Node[]; // woohoo recursion, it's like I'm back in CSCI 1901
  content?: Node[]; // woohoo recursion, it's like I'm back in CSCI 1901
  text?: string;
}

export interface TextNode {
  type: string;
  text: string;
}

export const NodeType = typeof Node;
