import React, { FunctionComponent } from 'react';
import { Linking, Text, View } from 'react-native';

import Traverse from '../utils/Traverse';
import { ApmComponentProps } from '../types/index';
// TODO: Figure out how we want to handle the "hyperlinking" aspect, given
// that Native navigation works so differently. I have a vague notion of
// getting each component's position and using a scrollTo function, but I
// haven't worked that out yet.

const ApmFootnoteListItem: FunctionComponent<ApmComponentProps> = (props) => {
  const { nodeData } = props;
  const {
    attrs: { number }
  } = nodeData;

  return (
    <View>
      <Text>{`${number}.`}</Text>
      <Text data-id={`footnote-content-${number}`}>{Traverse(props)}</Text>
      <Text onPress={() => Linking.openURL(`#footnote-link-${number}`)}>↩</Text>
    </View>
  );
};

export default ApmFootnoteListItem;
