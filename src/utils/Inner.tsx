import React from 'react';

const Inner = (child, props) => {
  const Dispatcher = props.components[child.type];
  switch (child.type) {
    case 'apm_image':
      return (
        <Dispatcher
          key={Math.random()}
          embedded={props.embedded}
          image={child.attrs}
          aspectRatio={child.attrs.preferred_aspect_ratio_slug}
          components={props.components}
        />
      );
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
