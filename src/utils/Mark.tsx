import React from 'react';

const Mark = (mark, InnerComponent, attrs = {}, props) => {
  const Dispatcher = props.components[mark.type];
  return <Dispatcher key={Math.random()} inner={InnerComponent} {...attrs} />;
};

export default Mark;
