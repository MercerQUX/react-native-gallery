import {RootState} from './../store';

export const selectMainText = (state: RootState) => state.mainSlicer.text;
export const selectMainPhoto = (state:RootState) => state.mainSlicer.photo;
export const selectMainIsLoading = (state:RootState) => state.mainSlicer.isLoading;