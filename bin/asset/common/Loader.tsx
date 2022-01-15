import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export const Loader = () => {
  return (
    <View style={styles.wrapper}>
      <FastImage style={styles.loader} source={require('../Rolling.gif')} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: '40%',
    height: '40%',
  },
});
