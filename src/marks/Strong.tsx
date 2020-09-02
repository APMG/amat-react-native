import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import { Inner } from '../types';

interface Props {
  inner: Inner;
}

const Strong: FunctionComponent<Props> = ({ inner }) => {
  return (
    <Text data-mark="strong" style={styles.strong}>
      {inner}
    </Text>
  );
};

const styles = StyleSheet.create({
  strong: {
    fontWeight: 'bold'
  }
});

export default Strong;
