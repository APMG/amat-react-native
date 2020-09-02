import React, { FunctionComponent } from 'react';
import { Linking, StyleSheet, Text } from 'react-native';

import { Inner } from '../types';

interface Props {
  inner: Inner;
  href: string;
  title: string;
}

const Link: FunctionComponent<Props> = ({ inner, href }) => {
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
