import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Node, NodeType } from '../types/prosemirror';
import { determineNodeType } from '../utils/utils';

interface Props {
  nodeData: Node;
}

const UnorderedList: FunctionComponent<Props> = (props) => {
  let listItems = [];

  const process = (content: Node) => {
    for (const i in content) {
      if (typeof content[i] === NodeType) {
        process(content[i]);
      } else {
        let type = determineNodeType(content[i]);
        if (type === 'content') {
          content[i].forEach((node) => {
            node.content.forEach((textNode) => {
              listItems.push(
                <Text key={Math.random()}>{` • ${textNode.text}\n`}</Text>
              );
            });
          });
        }
      }
    }
  };

  props.nodeData.content.forEach((node, i) => {
    process(node);
  });

  return <View style={styles.list}>{listItems}</View>;
};

const styles = StyleSheet.create({
  list: {
    fontSize: 14,
    marginVertical: 5,
    marginHorizontal: 10
  }
});

export default UnorderedList;
