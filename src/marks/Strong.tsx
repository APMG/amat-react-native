import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import { MarkProps } from '../types';

const Strong: FunctionComponent<MarkProps> = ({ inner }) => {
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
