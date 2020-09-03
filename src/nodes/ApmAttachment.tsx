import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

const ApmAttachment: FunctionComponent = () => {
  return <Text style={styles.todo}>ApmAttachment</Text>;
};

const styles = StyleSheet.create({
  todo: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'crimson'
  }
});

export default ApmAttachment;
