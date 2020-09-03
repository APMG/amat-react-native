import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

const ApmGallery: FunctionComponent = () => {
  return <Text style={styles.todo}>ApmGallery</Text>;
};

const styles = StyleSheet.create({
  todo: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'crimson'
  }
});

export default ApmGallery;
