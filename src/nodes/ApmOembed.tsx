import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

const ApmOembed: FunctionComponent = () => {
  return <Text style={styles.todo}>ApmOembed</Text>;
};

const styles = StyleSheet.create({
  todo: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'crimson'
  }
});

export default ApmOembed;
