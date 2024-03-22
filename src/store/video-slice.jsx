import { createSlice } from "@reduxjs/toolkit";
const videoReducer = createSlice({
    name: "video",
    initialState: {activeButton:"ALL",videoDefault:[]},
    reducers: {
        setActiveButton(state, action) {
            state.activeButton = action.payload;
        },
        setVideo(state, action) {
            state.videoDefault = action.payload;
        }
    }
})
export const videoAction = videoReducer.actions;
export const videoReducerF = videoReducer.reducer;