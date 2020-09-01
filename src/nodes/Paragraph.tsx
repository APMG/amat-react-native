import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

import Traverse from '../utils/Traverse';

const Paragraph: FunctionComponent = (props) => {
  return <Text>{Traverse(props)}</Text>;
};

export default Paragraph;
