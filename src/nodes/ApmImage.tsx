import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Linking
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

  return (
    <View>
      <Image
        source={sources || { uri: embeddedImage.fallback }}
        style={[
          styles[imageAttributes.float || 'left'],
          styles[imageAttributes.width || 'full']
        ]}
        accessibilityLabel={imageAttributes.short_caption}
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
  if (long_caption || credit) {
    return (
      <View style={styles.caption}>
        {long_caption && <Text>{long_caption}</Text>}
        {credit && credit_url && (
          <TouchableOpacity onPress={() => Linking.openURL(credit_url)}>
            <Text style={styles.credit}>{credit}</Text>
          </TouchableOpacity>
        )}
        {credit && !credit_url && <Text style={styles.credit}>{credit}</Text>}
      </View>
    );
  }

  return null;
};

//@TODO Fix styles ... :(
const styles = StyleSheet.create({
  credit: {},
  caption: {},
  full: {
    width: '100%'
  },
  half: {
    width: '60%'
  },
  quarter: {
    width: '40%'
  },
  right: {
    alignContent: 'flex-end'
  },
  left: {
    alignContent: 'flex-start'
  }
});

export default ApmImage;
