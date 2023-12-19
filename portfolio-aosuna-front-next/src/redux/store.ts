import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import themeReducer from "./features/themeSlice";

export const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
