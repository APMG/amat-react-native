import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Traverse from '../utils/Traverse';

const ApmCorrection = (props) => {
  const {
    attrs: { timestamp }
  } = props.nodeData;

  return (
    <View style={styles.correction}>
      <Text style={styles.title}>Correction</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
      <Text>{Traverse(props)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  correction: {
    backgroundColor: 'gainsboro',
    padding: 5,
    margin: 5,
    marginLeft: 15
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  timestamp: {
    fontSize: 10,
    fontStyle: 'italic'
  }
});

export default ApmCorrection;
