import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

import { InnerProps } from '../types';

interface Props {
  inner: InnerProps;
}

const Em: FunctionComponent<Props> = ({ inner }) => {
  return <Text data-mark="em" style={{fontStyle: 'italic'}}>{inner}</Text>;
};

export default Em;
