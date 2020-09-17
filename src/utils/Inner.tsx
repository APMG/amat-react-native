import React from 'react';
import { Node } from '../types/prosemirror';
import { ApmComponentProps } from '../types';

const Inner = (child: Node, props: ApmComponentProps) => {
  const Dispatcher = props.components[child.type];
  switch (child.type) {
    // case 'apm_image':
    //   return (
    //     <Dispatcher
    //       key={Math.random()}
    //       embedded={props.embedded}
    //       image={child.attrs}
    //       aspectRatio={child.attrs.preferred_aspect_ratio_slug}
    //       components={props.components}
    //     />
    //   ); // refactor apm_image to use the standard interface!
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
