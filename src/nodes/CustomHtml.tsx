import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

const CustomHtml: FunctionComponent = () => {
  return <Text style={styles.todo}>CustomHtml</Text>;
};

const styles = StyleSheet.create({
  todo: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'crimson'
  }
});

export default CustomHtml;
