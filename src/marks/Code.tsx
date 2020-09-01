import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

import { InnerProps } from '../types';

interface Props {
  inner: InnerProps;
}

const Code: FunctionComponent<Props> = ({ inner }) => {
  return <Text style={{color: 'magenta'}}>{inner}</Text>;
};

export default Code;
