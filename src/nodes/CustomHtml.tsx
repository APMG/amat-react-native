import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { ApmComponentProps } from '../types';
import { CustomHtmlAttrs } from '../types/prosemirror';
import HTML from 'react-native-render-html';
import { WebView } from 'react-native-webview';

const CustomHtml: FunctionComponent<ApmComponentProps> = (props) => {
  const attributes = props.nodeData.attrs as CustomHtmlAttrs;

  function findUri(html: string): string | false {
    if (html.match(/<script/)) return false;

    const match = html.match(/(?:src|data-url)=[^'"]*['"]([^'"]+)/);
    return match ? match[1] : false;
  }

  function findHeight(html: string): number {
    const match = html.match(/height[:=][^\d]*(\d+)/);
    return match ? +match[1] : 150;
  }

  const uri = attributes.fallback_url?.length
    ? attributes.fallback_url
    : findUri(attributes.html);

  return (
    <View
      style={{
        flex: 1,
        height: findHeight(attributes.html),
        width: '100%',
        marginVertical: 10,
        position: 'relative'
      }}
    >
      {uri ? (
        <WebView
          style={{ flex: 1 }}
          originWhitelist={['*']}
          source={{
            uri
          }}
          scrollEnabled={false}
        />
      ) : (
        <HTML html={attributes.html} />
      )}
    </View>
  );
};

export default CustomHtml;
