import { configureStore } from "@reduxjs/toolkit";
import { uiReducerFun } from "./ui-slice";
import { chatReducerF } from "./chat-slice";
import { videoReducerF } from "./video-slice";

const store=configureStore({
    reducer: {
        ui: uiReducerFun,
        chat: chatReducerF,
        video:videoReducerF
    }
})
export default store;