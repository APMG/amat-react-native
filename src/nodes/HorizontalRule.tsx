import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

const HorizontalRule: FunctionComponent = () => {
  return <View style={styles.horizontalRule}></View>;
};

const styles = StyleSheet.create({
  horizontalRule: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingHorizontal: 3,
    alignSelf: 'stretch'
  }
});

export default HorizontalRule;
