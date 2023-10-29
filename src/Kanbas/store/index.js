import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from '../Courses/CoursesModules/modulesReducer';

const store = configureStore({
  reducer: {
    modulesReducer,
  },
});

export default store;
