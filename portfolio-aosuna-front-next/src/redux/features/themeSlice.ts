import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dark: false
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        isDark: (state) => {
            state.dark = true
        },
        isLight: (state) => {
            state.dark = false
        }
    }
})

export const {isDark, isLight} = themeSlice.actions;

export default themeSlice.reducer;