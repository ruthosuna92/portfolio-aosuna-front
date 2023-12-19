// redux/reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import petroleumReducer from './features/petroleumDataSlice';
import themeReducer from "./features/themeSlice";

const rootReducer = combineReducers({
  petroleumReducer,
  themeReducer
  // ...otros reducers si los tienes
});

export default rootReducer;
