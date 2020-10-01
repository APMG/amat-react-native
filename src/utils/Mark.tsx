import React from 'react';
import { ApmComponentProps } from '../types';

const Mark = (mark, InnerComponent, attrs = {}, props: ApmComponentProps) => {
  const Dispatcher = props.components[mark.type];
  return <Dispatcher key={Math.random()} inner={InnerComponent} {...attrs} />;
};

export default Mark;
