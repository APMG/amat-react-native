import React, { FunctionComponent } from 'react';
import { Alert, Linking, Text } from 'react-native';

import { InnerProps } from '../types';

interface Props {
  inner: InnerProps;
  href: string;
  title: string;
}

const Link: FunctionComponent<Props> = ({ inner, href, title }) => {
  return (
    <Text
      data-mark="link"
      style={{color: 'blue'}}
      onPress={() => Linking.openURL(href)}
    >
      {inner}
    </Text>
  )
};

export default Link;
