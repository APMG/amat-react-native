import React, { FunctionComponent } from 'react';

import { EmbeddedAssets } from '../types';
import { Doc, Node, TextNode, NodeType } from '../types/prosemirror';

interface Props {
  nodeData: Doc;
  embedded?: EmbeddedAssets;
  overrides?: object;
}

const process = (content: Node) => {
  for (const i in content) {
    if (typeof content[i] === NodeType) {
      process(content[i]);
    } else {
      if (Array.isArray(content[i])) {
        console.log('content', content[i]);
      } else if (typeof content[i] === 'object' && content[i] !== null) {
        console.log('attrs', content[i]);
      } else {
        console.log('type', content[i]);
      }
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
