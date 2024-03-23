import { createSlice } from "@reduxjs/toolkit";

const uiReducer=createSlice({
    name: "ui",
    initialState: { toggle: false,theme:null ,isLoading:true},
    reducers: {
        toggleMenu(state) {
            state.toggle = !state.toggle
        },
        setTheme(state, action) {
            state.theme=action.payload
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        }
    }
});

export const { toggleMenu,setTheme,setLoading }=uiReducer.actions;
export const uiReducerFun = uiReducer.reducer;