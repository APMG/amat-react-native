import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { ApmComponentProps } from '../types';
import { ImageAttrs } from '../types/prosemirror';

const ApmGallery: FunctionComponent<ApmComponentProps> = (props) => {
  const embeddedImages = props.nodeData.content.map((image) => {
    const imageAttributes = image.attrs as ImageAttrs;
    return props.embedded?.images?.find(
      (embeddedImage) =>
        embeddedImage.id && embeddedImage.id === imageAttributes.id
    );
  });

  const images = embeddedImages.map(
    (image) => image.preferred_aspect_ratio.instances[0].url
  );

  return (
    <View style={styles.container}>
      <SliderBox images={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ApmGallery;
