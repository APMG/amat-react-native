import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import Traverse from '../utils/Traverse';

const Blockquote: FunctionComponent = (props) => {
  return <Text style={styles.blockquote}>{Traverse(props)}</Text>;
};

const styles = StyleSheet.create({
  blockquote: {
    fontSize: 14,
    backgroundColor: 'gainsboro',
    fontStyle: 'italic',
    padding: 5,
    margin: 5,
    marginLeft: 15
  }
});

export default Blockquote;
