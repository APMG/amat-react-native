import React, { FunctionComponent } from 'react';
import { StyleSheet, Text as TextNative } from 'react-native';

import { TextNode } from '../types/prosemirror';
import { EscapeSpecialCharacters } from '../utils/utils';

interface Props {
  nodeData: TextNode
}

const Text: FunctionComponent<Props> = ({ nodeData }) => {
  const text = EscapeSpecialCharacters(nodeData['text']);
  return <TextNative>{text}</TextNative>;
};

export default Text;
