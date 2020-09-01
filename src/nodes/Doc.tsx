import React, { FunctionComponent } from 'react';
import Traverse from '../utils/Traverse';

const Doc: FunctionComponent = (props) => {
  return <>{Traverse(props)}</>;
};

export default Doc;
