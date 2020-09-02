import React, { FunctionComponent } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

import { InnerProps } from '../types';

interface Props {
  inner: InnerProps;
  styles: object;
}

const Code: FunctionComponent<Props> = ({ inner }) => {
  // Cannot add fontFamily through a rollup build process. If you want something other than this, you'll have to write an override component.
  return (
    <Text data-mark="code" style={testStyles.test}>
      {inner}
    </Text>
  );
};

const testStyles = StyleSheet.create({
  test: {
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
