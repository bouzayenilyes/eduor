// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import videoReducer from './features/videoSlice';
import mobileNavReducer from './features/mobileNavSlice';
const rootReducer = combineReducers({
    video: videoReducer,
    mobileNav: mobileNavReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;