import { configureStore } from '@reduxjs/toolkit';
import casesReducer from '../redux/casesSlice/casesSlice';

export default configureStore({
  reducer: {
    cases: casesReducer,
  },
});
