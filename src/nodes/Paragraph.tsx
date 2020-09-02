import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import Traverse from '../utils/Traverse';

const Paragraph: FunctionComponent = (props) => {
  return <Text style={styles.paragraph}>{Traverse(props)}</Text>;
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 14,
    marginVertical: 5,
    marginHorizontal: 10
  }
});

export default Paragraph;
