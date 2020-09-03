import React, { FunctionComponent } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';

import { Node, NodeType } from '../types/prosemirror';

// TODO: Figure out how we want to handle the "hyperlinking" aspect, given
// that Native navigation works so differently. I have a vague notion of
// getting each component's position and using a scrollTo function, but I 
// haven't worked that out yet.

interface Props {
  nodeData: Node;
}

const ApmTableOfContents: FunctionComponent<Props> = (props) => {
  console.log('toc props', props);
  
  // TODO: size those TOC entries based on header level

  return (
    <View style={styles.toc}>
      {props.nodeData.attrs.anchors.map((anchor) => {
        return (
          <Text
            key={anchor.anchor}
            style={[styles.link, styles[`h${anchor.level}`]]}
            onPress={() => Linking.openURL(anchor.anchor)}
          >
            {`${anchor.linkText}`}
          </Text>
        )
      })}
    </View>
  )
};

const styles = StyleSheet.create({
  toc: {
    marginVertical: 5,
    marginHorizontal: 10
  },
  link: {
    color: 'blue'
  },
  h1: {
    fontSize: 28
  },
  h2: {
    fontSize: 24
  },
  h3: {
    fontSize: 22
  },
  h4: {
    fontSize: 20
  },
  h5: {
    fontSize: 16
  },
  h6: {
    fontSize: 14
  }
});

export default ApmTableOfContents;
