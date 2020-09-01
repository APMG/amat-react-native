import React from 'react';
import Traverse from './utils/Traverse';
import DefaultComponents from './utils/DefaultComponents';

const Body = ({ nodeData, embedded, overrides = {} }) => {
  const components = DefaultComponents();
  const mergedComponents =
    Object.keys(overrides).length > 0
      ? Object.assign(components, overrides)
      : components;

  return (
    <Traverse
      nodeData={nodeData}
      embedded={embedded ? embedded : {}}
      components={mergedComponents}
    />
  );
};

export default Body;
