import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

interface Props {
  inner: any;
}

const Em: FunctionComponent<Props> = ({ inner }) => {
  console.log('em inner', inner);

  return <Text style={{fontStyle: 'italic'}}>{inner}</Text>;
};

export default Em;
