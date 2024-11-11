import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VideoState {
  isVideoOpen: boolean;
}

const initialState: VideoState = {
  isVideoOpen: false,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    toggleVideoOpen: (state) => {
      state.isVideoOpen = true;
    },
    toggleVideoClose: (state) => {
      state.isVideoOpen = false;
    },
  },
});

export const { toggleVideoOpen, toggleVideoClose } = videoSlice.actions;
export default videoSlice.reducer;