import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

import { InnerProps } from '../types';

interface Props {
  inner: InnerProps;
}

const Strong: FunctionComponent<Props> = ({ inner }) => {
  return <Text data-mark="strong" style={{fontWeight: 'bold'}}>{inner}</Text>;
};

export default Strong;
