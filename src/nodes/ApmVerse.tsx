import React, { FunctionComponent } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

import Traverse from '../utils/Traverse';

const ApmVerse: FunctionComponent = (props) => {
  return <Text style={styles.verse}>{Traverse(props)}</Text>;
};

const styles = StyleSheet.create({
  verse: {
    color: 'indigo',
    marginVertical: 5,
    marginHorizontal: 10,
    ...Platform.select({
      ios: {
        fontFamily: 'Georgia'
      },
      android: {
        fontFamily: 'notoserif'
      },
      default: {
        fontFamily: 'serif'
      }
    })
  }
});

export default ApmVerse;
