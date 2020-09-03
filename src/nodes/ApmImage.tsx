import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

const ApmImage: FunctionComponent = () => {
  return <Text style={styles.todo}>ApmImage</Text>;
};

const styles = StyleSheet.create({
  todo: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'crimson'
  }
});

export default ApmImage;
