import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import { Inner } from '../types';

interface Props {
  inner: Inner;
}

const Em: FunctionComponent<Props> = ({ inner }) => {
  return <Text data-mark="em" style={styles.em}>{inner}</Text>;
};

const styles = StyleSheet.create({
  em: {
    fontStyle: 'italic'
  }
});

export default Em;
