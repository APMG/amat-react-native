import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import { InnerProps } from '../types';

interface Props {
  inner: InnerProps;
  styles: object;
}

const Code: FunctionComponent<Props> = ({ inner, styles }) => {
  // Cannot add fontFamily through a rollup build process. Will try to feed in via the parent app
  return (
    <Text data-mark="code" style={[testStyles.test, styles]}>
      {inner}
    </Text>
  );
};

const testStyles = StyleSheet.create({
  test: {
    color: 'magenta'
  }
});

export default Code;
