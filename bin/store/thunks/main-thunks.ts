import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchPhotoPage} from '../../service/API';

const filterShortDTO = ({data, index}: any) => {
  return {
    indexID: index,
    id: data.id,
    author: data.user.username,
    color:data.color,
    discription: data.description || 'Unknow',
    urls: {small: data.urls.regular, full: data.urls.full},
  };
};

export const loadPhoto = createAsyncThunk(
  'main/loadPhoto',
  async (payload: number, thunkAPI) => {
    try {
      const requestPhoto = await fetchPhotoPage(payload);
      return requestPhoto.map((photo, index) => {
        return filterShortDTO({data: photo, index});
      });
    } catch (e) {
      return thunkAPI.rejectWithValue(
        'Warning: Failed to retrieve data, try refreshing the page or reloading the app',
      );
    }
  },
);
