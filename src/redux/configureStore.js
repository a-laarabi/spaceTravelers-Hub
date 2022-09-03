import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import missionReducer from './missions/mission';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketsSlice.reducer,
  },
});

export default store;
