import React, { FunctionComponent } from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Node } from '../types/prosemirror';

interface Props {
  nodeData: Node
}

const ApmRelatedLink: FunctionComponent<Props> = (props) => {
  const { prefix, title, url } = props.nodeData.attrs;

  return (
    <TouchableOpacity style={styles.relatedLink} onPress={() => Linking.openURL(url)}>
      <Text style={styles.strong}>{title}</Text>
      <Text>{prefix}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  relatedLink: {
    marginVertical: 5,
    marginHorizontal: 10
  },
  strong: {
    fontWeight: 'bold'
  }
});

export default ApmRelatedLink;
