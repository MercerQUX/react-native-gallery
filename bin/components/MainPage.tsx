import React, {useCallback, useEffect} from 'react';
import {View, StyleSheet, Button, useWindowDimensions} from 'react-native';
import {Loader} from '../asset/common/Loader';
import {useAppDispatch, useAppSelector} from '../hooks/redux-use';
import {selectMainIsLoading} from '../store/selectors/main-selector';
import {loadPhoto} from '../store/thunks/main-thunks';
import {styleAppColor} from '../styleColor';
import {Header} from './Header';
import {ScrollViewPhoto} from './ScrollViewPhoto';

export const MainPage = () => {
  const {isLoading, dispatch} = {
    isLoading: useAppSelector(selectMainIsLoading),
    dispatch: useAppDispatch(),
  };

  const {height, width} = useWindowDimensions();
  let isPositionWindow = height >= width;

  const [page, changePage] = React.useState(1);

  const getPhoto = useCallback(
    (page: number) => dispatch(loadPhoto(page)),
    [dispatch],
  );
  useEffect(() => {
    getPhoto(page);
  }, [getPhoto, page]);

  return (
    <View
      style={
        isPositionWindow ? styles.wrapper_horizont : styles.wrapper_vertical
      }>
      <Header isPosition={isPositionWindow} />
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollViewPhoto getPhoto={getPhoto} page={page} />
      )}
      <Button
        color={styleAppColor.button_nextPage}
        onPress={() => changePage(page + 1)}
        title="next page"
      />
    </View>
  );
};

const constStyle = {
  wrapper: {backgroundColor: styleAppColor.background_Main},
};

const styles = StyleSheet.create({
  wrapper_horizont: {paddingBottom: '26%', ...constStyle.wrapper},
  wrapper_vertical: {paddingBottom: '12%', ...constStyle.wrapper},
  wrapper_buttons: {
    margin: 0,
  },
});
