import React, { FunctionComponent } from 'react';
import { Dimensions, View } from 'react-native';
import { ApmComponentProps, Oembed } from '../types';
import { WebView } from 'react-native-webview';

const ApmVideo: FunctionComponent<ApmComponentProps> = (props) => {
  function findUri(embed: Oembed): string {
    const match = embed.html.match(/src=['"]([^'"]+)/);
    return match ? match[1] : embed.url;
  }

  const embed = props.embedded.oembeds.find((embed) => {
    return embed?.url === props.nodeData.attrs.url;
  });

  if (!embed) {
    console.log('embed for apm_video not found!');
    return null;
  }

  const { width } = Dimensions.get('window');
  const height = width * (embed.height / embed.width);

  return (
    <View
      style={{
        flex: 1,
        height,
        width,
        marginVertical: 10,
        position: 'relative'
      }}
    >
      <WebView
        style={{ flex: 1 }}
        originWhitelist={['*']}
        source={{
          uri: findUri(embed)
        }}
        scrollEnabled={false}
      />
    </View>
  );
};

export default ApmVideo;
