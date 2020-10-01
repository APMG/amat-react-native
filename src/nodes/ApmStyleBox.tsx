import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

import { ApmComponentProps } from '../types/index';
import Traverse from '../utils/Traverse';

// Since classes only work on Next.js, whatever styles you attach to the class you shove in here will only show up in the Next.js version of your app.
const ApmStyleBox: FunctionComponent<ApmComponentProps> = (props) => {
  const { custom_class } = props.nodeData.attrs;

  return (
    <Text
      data-class={`apm-style-box ${custom_class}-box`}
      data-custom-class={custom_class}
    >
      {Traverse(props)}
    </Text>
  );
};

export default ApmStyleBox;
