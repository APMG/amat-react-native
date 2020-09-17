import React, { FunctionComponent } from 'react';
import { Text as TextNative } from 'react-native';

import { EscapeSpecialCharacters } from '../utils/utils';
import { ApmComponentProps } from '../types';

const Text: FunctionComponent<ApmComponentProps> = ({ nodeData }) => {
  const text = EscapeSpecialCharacters(nodeData['text']);
  return <TextNative>{text}</TextNative>;
};

export default Text;
