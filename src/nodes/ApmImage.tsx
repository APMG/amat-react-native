import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ApmComponentProps } from '../types/index';

const ApmImage: FunctionComponent<ApmComponentProps> = (props) => {
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
