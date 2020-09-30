import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Linking,
  Dimensions
} from 'react-native';
import { ApmComponentProps } from '../types/index';
import { ImageAttrs } from '../types/prosemirror';

const ApmImage: FunctionComponent<ApmComponentProps> = (props) => {
  const imageAttributes = props.nodeData.attrs as ImageAttrs;

  const embeddedImage = props.embedded?.images?.find(
    (image) => image.id && image.id === imageAttributes.id
  );

  const sources = embeddedImage.aspect_ratios[
    imageAttributes.preferred_aspect_ratio_slug || 'uncropped'
  ]?.instances?.map((instance) => {
    return {
      uri: instance.url,
      height: instance.height,
      width: instance.width
    };
  });

  const dimensions = Dimensions.get('window');
  const { height, width } = sources[0];
  const fullImageWidth = dimensions.width;
  const fullImageHeight = fullImageWidth * (height / width);

  const containerStyles = StyleSheet.create({
    full: {
      width: fullImageWidth
    },
    half: {
      width: fullImageWidth * 0.5
    },
    quarter: {
      width: fullImageWidth * 0.25
    },
    right: {
      alignSelf: 'flex-end'
    },
    left: {
      alignSelf: 'flex-start'
    },
    none: {
      alignSelf: 'flex-start'
    }
  });

  const imageStyles = StyleSheet.create({
    full: {
      flex: 1,
      width: fullImageWidth,
      height: fullImageHeight
    },
    half: {
      flex: 1,
      width: fullImageWidth * 0.5,
      height: fullImageHeight * 0.5
    },
    quarter: {
      flex: 1,
      width: fullImageWidth * 0.25,
      height: fullImageHeight * 0.25
    }
  });

  return (
    <View
      style={[
        containerStyles[imageAttributes.float || 'none'],
        containerStyles[imageAttributes.width || 'full']
      ]}
    >
      <Image
        resizeMode="cover"
        source={sources || { uri: embeddedImage.fallback }}
        accessibilityLabel={imageAttributes.short_caption}
        style={imageStyles[imageAttributes.width]}
      />
      <Caption {...imageAttributes} />
    </View>
  );
};

interface CaptionProps {
  long_caption?: string | null;
  credit?: string | null;
  credit_url?: string | null;
}

const Caption: FunctionComponent<CaptionProps> = ({
  long_caption,
  credit,
  credit_url
}) => {
  //@TODO Fix styles ... :(
  const captionStyles = StyleSheet.create({
    credit: {},
    caption: {}
  });

  if (long_caption || credit) {
    return (
      <View style={captionStyles.caption}>
        {long_caption && <Text>{long_caption}</Text>}
        {credit && credit_url && (
          <TouchableOpacity onPress={() => Linking.openURL(credit_url)}>
            <Text style={captionStyles.credit}>{credit}</Text>
          </TouchableOpacity>
        )}
        {credit && !credit_url && (
          <Text style={captionStyles.credit}>{credit}</Text>
        )}
      </View>
    );
  }

  return null;
};

export default ApmImage;
