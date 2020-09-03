import React, { FunctionComponent } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import Break from './Break';

import { Node } from '../types/prosemirror';

interface Props {
  nodeData: Node
}

const ApmRelatedLinkListItem: FunctionComponent<Props> = (props) => {
  const { prefix, title, url } = props.nodeData.attrs;

  return (
    <Text>
      <Text>{`${prefix} | `}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(url)}>{title}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    fontWeight: 'bold'
  }
});

export default ApmRelatedLinkListItem;
