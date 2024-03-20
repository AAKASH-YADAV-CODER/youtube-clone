import { createSlice } from "@reduxjs/toolkit";

const uiReducer=createSlice({
    name: "ui",
    initialState: { toggle: true },
    reducers: {
        toggleMenu(state) {
            state.toggle = !state.toggle
        },
    }
});

export const { toggleMenu }=uiReducer.actions;
export const uiReducerFun = uiReducer.reducer;