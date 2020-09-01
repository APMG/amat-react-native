import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

interface Props {
  inner: any;
}

const Link: FunctionComponent<Props> = ({ inner }) => {
  console.log('link inner', inner);
  // TODO: make it href
  return <Text style={{color: 'blue'}}>{inner}</Text>;
};

export default Link;
