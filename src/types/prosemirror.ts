export interface Doc {
  type: string;
  content: Node[]; // known in Prosemirror's docs as a "Fragment"
}

export interface Node {
  type: string;
  attrs?: Attrs;
  content?: Node[]; // woohoo recursion, it's like I'm back in CSCI 1901
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
}

interface Anchor {
  anchor?: string;
  linkText?: string;
  level?: number;
}

export const NodeType = typeof Node;
