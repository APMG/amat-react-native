import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Node, NodeType } from '../types/prosemirror';
import { determineNodeType } from '../utils/utils';

interface Props {
  nodeData: Node;
}

const OrderedList: FunctionComponent<Props> = (props) => {
  let listItems = [];

  const process = (content: Node, index: number) => {
    for (const i in content) {
      if (typeof content[i] === NodeType) {
        process(content[i], index);
      } else {
        let type = determineNodeType(content[i]);
        if (type === 'content') {
          content[i].forEach((node) => {
            node.content.forEach((textNode) => {
              listItems.push(
                <Text
                  key={Math.random()}
                  style={styles.text}
                >{` ${index}. ${textNode.text}\n`}</Text>
              );
            });
          });
        }
      }
    }
  };

  props.nodeData.content.forEach((node, i) => {
    process(node, i);
  });

  return <View style={styles.list}>{listItems}</View>;
};

const styles = StyleSheet.create({
  list: {
    fontSize: 14,
    marginVertical: 5,
    marginHorizontal: 10
  },
  text: {
    marginVertical: 2
  }
});

export default OrderedList;
