import React from 'react';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';
import {useAppSelector} from '../hooks/redux-use';
import {selectMainPhoto} from '../store/selectors/main-selector';
import {SinglePhotoBlock} from './SinglePhotoBlock';

interface defualtProps {
  page: number;
  getPhoto: (page: number) => Promise<any>;
}

export const ScrollViewPhoto = ({page, getPhoto}: defualtProps) => {
  const photo = useAppSelector(selectMainPhoto);
  const [refreshing, setRefreshing] = React.useState(false);
  return (
    <ScrollView
      style={styles.wrapper__scroll}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => getPhoto(page)}
        />
      }>
      {photo.map(photo => (
        <SinglePhotoBlock
          key={photo.id}
          urls={photo.urls}
          discription={photo.discription}
          author={photo.author}
          indexID={photo.indexID}
          color={photo.color}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper__scroll: {
    marginBottom: 5,
  },
});
