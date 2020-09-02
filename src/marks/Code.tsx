import React, { FunctionComponent } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

import { Inner } from '../types';

interface Props {
  inner: Inner;
}

const Code: FunctionComponent<Props> = ({ inner }) => {
  return (
    <Text data-mark="code" style={styles.code}>
      {inner}
    </Text>
  );
};

const styles = StyleSheet.create({
  code: {
    color: 'magenta',
    ...Platform.select({
      ios: {
        fontFamily: 'Menlo'
      },
      android: {
        fontFamily: 'monospace'
      },
      default: {
        fontFamily: 'monospace'
      }
    })
  }
});

export default Code;
