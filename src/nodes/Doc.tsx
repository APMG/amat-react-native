import React, { FunctionComponent } from 'react';
import Traverse from '../utils/Traverse';
import { ApmComponentProps } from '../types';

const Doc: FunctionComponent<ApmComponentProps> = (props) => {
  return <>{Traverse(props)}</>;
};

export default Doc;
