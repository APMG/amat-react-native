import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Inner } from '../types';
import Traverse from '../utils/Traverse';
import { ApmComponentProps } from '../types/index';

const componentMapper = (defaultComponents) => {
  return {
    ...defaultComponents,
    apm_footnote: defaultComponents.apm_footnote_list_item
  };
};

const ApmFootnoteList: FunctionComponent<ApmComponentProps> = (props) => {
  const componentMap = componentMapper(props.components);

  return (
    <View>
      <Text style={styles.title}>Footnotes</Text>
      <Traverse {...props} components={componentMap} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 24
  }
});

export default ApmFootnoteList;
