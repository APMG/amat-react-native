import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Traverse from '../utils/Traverse';
import { ApmComponentProps } from '../types';

// This is here to avoid crashes, but information about which markers to use cannot be found at this level. As such, OrderedList and UnorderedList will not be calling Traverse, and therefore should not run into this instance.
const ListItem: FunctionComponent<ApmComponentProps> = (props) => {
  return (
    <View style={styles.list}>
      <Text style={styles.text}>{`• ${Traverse(props)}\n`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    fontSize: 14,
    marginVertical: 5,
    marginHorizontal: 10
  },
  text: {
    marginVertical: 2
  }
});

export default ListItem;
