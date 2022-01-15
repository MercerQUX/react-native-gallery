import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPhotoData} from '../../models/IPhotoData';
import {loadPhoto} from '../thunks/main-thunks';

interface IMainState {
  isLoading: boolean;
  text: string;
  page: number;
  error: string;
  photo: Array<IPhotoData>;
}

const initialState: IMainState = {
  isLoading: false,
  page: 1,
  text: 'Mama Papa',
  photo: [],
  error: '',
};

const mainSlice = createSlice({
  name: 'Main',
  initialState,
  reducers: {
    swithLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [loadPhoto.fulfilled.type]: (
      state,
      action: PayloadAction<IPhotoData[]>,
    ) => {
      state.photo = [...action.payload];
      state.isLoading = false;
    },
    [loadPhoto.pending.type]: state => {
      state.isLoading = true;
    },
    [loadPhoto.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const mainAction = mainSlice.actions;
export const mainSlicer = mainSlice.reducer;
