import React, { FunctionComponent } from 'react';
import { Linking, StyleSheet, Text } from 'react-native';

import { MarkProps } from '../types';

const Link: FunctionComponent<MarkProps> = ({ inner, href }) => {
  return (
    <Text
      data-mark="link"
      style={styles.link}
      onPress={() => Linking.openURL(href)}
    >
      {inner}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
});

export default Link;
