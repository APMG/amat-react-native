import Inner from './Inner';
import Mark from './Mark';
import { FunctionComponent } from 'react';
import { ApmComponentProps } from '../types';

const NativeTraverse: FunctionComponent<ApmComponentProps> = (props) => {
  // Checks if the legacy Table of Contents is anywhere in this nodeData and delivers the old version if so. Not necessary for React Native sites, which shouldn't have any instances of the old TOCs left.
  let content = getContent(props);

  return content?.map((item) => {
    let InnerComponent = Inner(item, props);

    if (item.marks) {
      item.marks.reverse().forEach((mark) => {
        const attrs = mark.attrs || {};
        InnerComponent = Mark(mark, InnerComponent, attrs, props);
      });
    }

    return InnerComponent; // We are returning a React Element here, so it should be capitalized to cut down on confusion
  });
};

const getContent = (props) => {
  let content = null;

  // Footnotes store their content in a different location from most nodes
  if (props.nodeData?.content) {
    content = props.nodeData.content;
  } else if (props.nodeData?.attrs?.footnoteContent?.content) {
    content = props.nodeData.attrs.footnoteContent.content;
  }

  return content;
};

export default NativeTraverse;
