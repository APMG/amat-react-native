import React from 'react';
import { Node } from '../types/prosemirror';
import { ApmComponentProps } from '../types';

const Inner = (child: Node, props: ApmComponentProps) => {
  const Dispatcher = props.components[child.type];
  switch (child.type) {
    default:
      return (
        <Dispatcher
          key={Math.random()}
          nodeData={child}
          embedded={props.embedded}
          components={props.components}
        />
      );
  }
};

export default Inner;
