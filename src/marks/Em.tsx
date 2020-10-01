import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import { MarkProps } from '../types';

const Em: FunctionComponent<MarkProps> = ({ inner }) => {
  return (
    <Text data-mark="em" style={styles.em}>
      {inner}
    </Text>
  );
};

const styles = StyleSheet.create({
  em: {
    fontStyle: 'italic'
  }
});

export default Em;
