import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Node } from '../types/prosemirror';

import Traverse from '../utils/Traverse';

interface Props {
  nodeData: Node;
}

const Heading: FunctionComponent<Props> = (props) => {
  const id = findText(props);
  const level = `h${props.nodeData.attrs.level}`;

  return (
    <Text data-id={id} style={[styles.heading, styles[level]]}>
      {Traverse(props)}
    </Text>
  );
};

const findText = (props) => {
  if (props.nodeData.attrs.anchor) return props.nodeData.attrs.anchor;
  if (!props.nodeData.content) return null;

  let txtEle = props.nodeData.content.find((ele) => ele.type === 'text');
  let txt = txtEle.text.replace(/\s/g, '_').replace(/['"]/g, '');

  return `h${props.nodeData.attrs.level}_${txt.toLowerCase()}`;
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 10
  },
  h1: {
    fontSize: 32
  },
  h2: {
    fontSize: 28
  },
  h3: {
    fontSize: 24
  },
  h4: {
    fontSize: 22
  },
  h5: {
    fontSize: 18
  },
  h6: {
    fontSize: 16
  }
});

export default Heading;
