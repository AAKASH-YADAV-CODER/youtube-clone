import { createSlice } from "@reduxjs/toolkit";

const uiReducer=createSlice({
    name: "ui",
    initialState: { toggle: false,theme:null ,isLoading:true,isAuth:false},
    reducers: {
        toggleMenu(state) {
            state.toggle = !state.toggle
        },
        setTheme(state, action) {
            state.theme=action.payload
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setAuth(state, action) {
            state.isAuth = action.payload;
        }
    }
});

export const { toggleMenu,setTheme,setLoading,setAuth }=uiReducer.actions;
export const uiReducerFun = uiReducer.reducer;