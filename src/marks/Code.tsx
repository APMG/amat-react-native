import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

interface Props {
  inner: any;
}

const Code: FunctionComponent<Props> = ({ inner }) => {
  console.log('code inner', inner);
  // TODO: make it font family mono
  return <Text style={{color: 'pink'}}>{inner}</Text>;
};

export default Code;
