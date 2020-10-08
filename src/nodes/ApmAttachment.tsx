import React, { FunctionComponent } from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ApmComponentProps } from '../types';

const ApmAttachment: FunctionComponent<ApmComponentProps> = (props) => {
  const attachment = props.embedded.attachments.find(
    (attachment) => attachment.id === props.nodeData.attrs.attachment_id
  );
  return (
    <TouchableOpacity
      style={styles.attachment}
      onPress={() => Linking.openURL(attachment.url)}
    >
      <Text style={styles.strong}>{props.nodeData.attrs.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  attachment: {
    marginVertical: 5,
    marginHorizontal: 10
  },
  strong: {
    fontWeight: 'bold'
  }
});

export default ApmAttachment;
