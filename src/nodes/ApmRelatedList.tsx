import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Node } from '../types/prosemirror';
import Traverse from '../utils/Traverse';

interface Props {
  nodeData: Node
}

const enlistify = (props: Props) => {
  if (props?.nodeData?.content) {
    for (let i = 0; i < props.nodeData.content.length; ++i) {
      props.nodeData.content[
        i
      ].type = `${props.nodeData.content[i].type}_list_item`;
    }
  }
  return props;
};

const ApmRelatedList: FunctionComponent<Props> = (props) => {
  const { title } = props.nodeData.attrs;

  return (
    <View style={styles.relatedList}>
      <Text style={styles.title}>{title}</Text>
      <Text>{Traverse(enlistify(props))}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  relatedList: {
    marginVertical: 5,
    marginHorizontal: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24
  }
});

export default ApmRelatedList;
