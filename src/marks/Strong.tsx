import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

interface Props {
  inner: any;
}

const Strong: FunctionComponent<Props> = ({ inner }) => {
  console.log('strong inner', inner);

  return <Text style={{fontWeight: 'bold'}}>{inner}</Text>;
};

export default Strong;
