import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styleAppColor} from '../styleColor';

interface defaultProps {
  isPosition: boolean;
}

export const Header = ({isPosition}: defaultProps) => {
  return (
    <View style={isPosition ? styles.header_horizont : styles.header_vertical}>
      <Text style={styles.hedear_text}>Test Gallery</Text>
    </View>
  );
};

const constStyle = {
  header: {
    backgroundColor: styleAppColor.background_Header,
    opacity: 0.7,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
  },
};

const styles = StyleSheet.create({
  header_horizont: {
    padding: '3%',
    ...constStyle.header,
  },
  header_vertical: {
    padding: '1%',
    ...constStyle.header,
  },
  hedear_text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: styleAppColor.text_Header,
  },
});
