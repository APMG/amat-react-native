import React, { FunctionComponent } from 'react';

import { EmbeddedAssets } from '../types';
import { Doc, Node } from '../types/prosemirror';

interface Props {
  nodeData: Doc;
  embedded?: EmbeddedAssets;
  overrides?: object;
}

const process = (content: Node[]) => {
  for (const i in content) {
    console.log('node', content[i]);
  }
}

const Body: FunctionComponent<Props> = ({
  nodeData,
  embedded,
  overrides
}) => {
  

  return (
    <h1>Bodyyy ody ody ody</h1>
  );
}

export default Body;
