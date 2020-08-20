import React, { FunctionComponent } from 'react';

import { Node, TextNode } from '../types/prosemirror';

export interface Props {
  node: Node;
}

const Paragraph: FunctionComponent<Props> = ({ node }) => {
  const paragraphs: JSX.Element[] = [];
  node.content.forEach((childNode: TextNode, i: number) => {
    paragraphs.push(<p key={i}>{childNode.text}</p>);
  });
  return <>{paragraphs}</>;
};

export default Paragraph;
