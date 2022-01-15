import {useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IRouteData} from '../models/IRouteData';
import {styleAppColor} from '../styleColor';

export const FullPhoto = (props: any) => {
  const routeData = useRoute<IRouteData>();
  const {height, width} = useWindowDimensions();
  let isPositionWindow = height >= width;
  return (
    <View style={[styles.wrapper, {backgroundColor: routeData.params.color}]}>
      <FastImage
        style={styles.image}
        source={{
          uri: routeData.params.photo,
          priority: FastImage.priority.normal,
        }}
      />
      <Text
        style={
          isPositionWindow
            ? styles.text__author_verticly
            : styles.text__author_horizontly
        }>
        {`Author: \n ${routeData.params.author}`}
      </Text>
    </View>
  );
};

const constStyle = {
  text__author: {
    zIndex: 1000,
    color: styleAppColor.text_fullPhotoAuthor,
    fontSize: 40,
    padding: 20,
    opacity: 0.6,
  },
};

const styles = StyleSheet.create({
  wrapper: {},
  image: {width: '100%', height: '100%', zIndex: 2},
  text__author_verticly: {
    position: 'absolute',
    fontWeight: 'bold',
    top: '80%',
    ...constStyle.text__author,
  },
  text__author_horizontly: {
    position: 'absolute',
    fontWeight: 'bold',
    top: '58%',
    ...constStyle.text__author,
  },
});
