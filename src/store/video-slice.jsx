import { createSlice } from "@reduxjs/toolkit";
const videoReducer = createSlice({
    name: "video",
    initialState: {activeButton:"ALL",videoDefault:[],suggestion:[]},
    reducers: {
        setActiveButton(state, action) {
            state.activeButton = action.payload;
        },
        setVideo(state, action) {
            state.videoDefault = action.payload;
        },
        setSuggestion(state, action) {
            state.suggestion = action.payload;
        }
    }
})
export const videoAction = videoReducer.actions;
export const videoReducerF = videoReducer.reducer;