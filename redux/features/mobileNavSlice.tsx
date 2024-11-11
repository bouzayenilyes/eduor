import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MobileNavState {
  isMobileNavOpen: boolean;
}

const initialState: MobileNavState = {
  isMobileNavOpen: false,
};

const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState,
  reducers: {
    toggleMobileNavOpen: (state) => {
      state.isMobileNavOpen = true;
    },
    toggleMobileNavClose: (state) => {
      state.isMobileNavOpen = false;
    },
  },
});

export const { toggleMobileNavOpen, toggleMobileNavClose } = mobileNavSlice.actions;
export default mobileNavSlice.reducer;