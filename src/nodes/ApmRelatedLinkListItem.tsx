import React, { FunctionComponent } from 'react';
import { Linking, StyleSheet, Text } from 'react-native';

import { ApmComponentProps } from '../types/index';

const ApmRelatedLinkListItem: FunctionComponent<ApmComponentProps> = (
  props
) => {
  const { prefix, title, url } = props.nodeData.attrs;

  return (
    <Text>
      <Text>{`${prefix} | `}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(url)}>
        {title}
      </Text>
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
