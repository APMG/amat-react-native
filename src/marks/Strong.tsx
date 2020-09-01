import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

import { InnerProps } from '../types';

interface Props {
  inner: InnerProps;
}

const Strong: FunctionComponent<Props> = ({ inner }) => {
  return <Text style={{fontWeight: 'bold'}}>{inner}</Text>;
};

export default Strong;
