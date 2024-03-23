import { createSlice } from "@reduxjs/toolkit";

const uiReducer=createSlice({
    name: "ui",
    initialState: { toggle: false,theme:null },
    reducers: {
        toggleMenu(state) {
            state.toggle = !state.toggle
        },
        setTheme(state, action) {
            state.theme=action.payload
        }
    }
});

export const { toggleMenu,setTheme }=uiReducer.actions;
export const uiReducerFun = uiReducer.reducer;