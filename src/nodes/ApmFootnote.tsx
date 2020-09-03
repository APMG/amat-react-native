import React, { FunctionComponent } from 'react';
import { Linking, StyleSheet, Text } from 'react-native';

import { Node } from '../types/prosemirror';

// TODO: Figure out how we want to handle the "hyperlinking" aspect, given
// that Native navigation works so differently. I have a vague notion of
// getting each component's position and using a scrollTo function, but I 
// haven't worked that out yet.

interface Props {
  nodeData: Node;
}

const ApmFootnote: FunctionComponent<Props> = (props) => {
  const {
    attrs: { number }
  } = props.nodeData;

  return (
    <Text
      data-id={`footnote-link-${number}`}
      style={styles.link}
      onPress={() => Linking.openURL(`#footnote-content-${number}`)}
    >
      {` ${number}`}
    </Text>
  )
};

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
});

export default ApmFootnote;
