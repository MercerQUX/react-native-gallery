import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IPhotoData} from '../models/IPhotoData';
import {styleAppColor} from '../styleColor';

export const SinglePhotoBlock = ({
  urls: {small, full},
  author,
  discription,
  indexID,
  color,
}: IPhotoData) => {
  const [isLoad, setLoading] = useState(false);

  const navDispatch = useNavigation().dispatch;

  const redirect = () => {
    navDispatch(
      CommonActions.navigate({
        name: 'FullImg',
        params: {
          photo: full,
          indexID: indexID,
          author: author,
          color: color,
        },
      }),
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper_text}>
        <Text style={styles.text__author}>
          {isLoad ? 'Load Image' : author}
        </Text>
        <Text style={styles.text__discribe}>
          {isLoad ? 'Loading...' : discription}
        </Text>
      </View>
      <TouchableHighlight onPress={redirect}>
        <FastImage
          style={styles.photo}
          onError={() => setLoading(false)}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          source={{uri: small, priority: FastImage.priority.high}}
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '96%',
    marginLeft: '2%',
    marginTop: 15,
  },
  wrapper_text: {
    paddingBottom: 20,
    backgroundColor: styleAppColor.background_SinglePhotoBlock,
    borderColor: styleAppColor.border_SinglePhotoBlock,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderWidth: 3,
    borderBottomWidth: 0,
  },
  text__author: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: styleAppColor.text_Author,
    padding: 10,
  },
  text__discribe: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: styleAppColor.text_Discribe,
    textAlign: 'center',
  },
  photo: {
    width: '100%',
    backgroundColor: styleAppColor.background_LoadingPhoto,
    height: 250,
    borderRadius: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
});
