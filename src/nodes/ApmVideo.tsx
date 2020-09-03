import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

const ApmVideo: FunctionComponent = () => {
  return <Text style={styles.todo}>ApmVideo</Text>;
};

const styles = StyleSheet.create({
  todo: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'crimson'
  }
});

export default ApmVideo;
