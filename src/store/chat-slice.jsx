import { createSlice } from "@reduxjs/toolkit";

const chatReducer = createSlice({
    name: "chat",
    initialState: {
        chatData:[]
    },
    reducers: {
        setMessageData(state, action) {
            state.chatData.splice(100, 1);
            state.chatData.push(action.payload);
        }
    }
})
export const chatReducerF = chatReducer.reducer;
export const { setMessageData } = chatReducer.actions; 