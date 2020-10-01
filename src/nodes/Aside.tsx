import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import Traverse from '../utils/Traverse';
import { ApmComponentProps } from '../types';

const Aside: FunctionComponent<ApmComponentProps> = (props) => {
  return <Text style={styles.aside}>{Traverse(props)}</Text>;
};

const styles = StyleSheet.create({
  aside: {
    fontSize: 14,
    fontStyle: 'italic',
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 5,
    margin: 5
  }
});

export default Aside;
