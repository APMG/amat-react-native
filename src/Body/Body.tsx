import React, { FunctionComponent } from 'react';

import { EmbeddedAssets } from '../types';
import { Doc, Node, TextNode, NodeType } from '../types/prosemirror';

interface Props {
  nodeData: Doc;
  embedded?: EmbeddedAssets;
  overrides?: object;
}

const determineNodeType = (node: Node) => {
  if (Array.isArray(node)) {
    console.log('content', node);
  } else if (typeof node === 'object' && node !== null) {
    console.log('attrs', node);
  } else {
    console.log('type', node);
  }
}

const process = (content: Node) => {
  for (const i in content) {
    if (typeof content[i] === NodeType) {
      process(content[i]);
    } else {
      determineNodeType(content[i]);
    }
  }
};

const Body: FunctionComponent<Props> = ({ nodeData, embedded, overrides }) => {
  nodeData.content.forEach((node, i) => {
    console.log(`${i}\n------`);
    process(node);
  });

  return <h1>Bodyyy ody ody ody</h1>;
};

export default Body;
