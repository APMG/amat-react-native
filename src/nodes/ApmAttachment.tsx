import React, { FunctionComponent } from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ApmComponentProps } from '../types';

const ApmAttachment: FunctionComponent<ApmComponentProps> = (props) => {
  const attachment = props.embedded.attachments.find(
    (attachment) => attachment.id === props.nodeData.attrs.attachment_id
  );
  return (
    <Text onPress={() => Linking.openURL(attachment.url)} style={styles.strong}>
      {props.nodeData.attrs.title}
    </Text>
  );
};

const styles = StyleSheet.create({
  strong: {
    fontWeight: 'bold',
    color: 'blue'
  }
});

export default ApmAttachment;
