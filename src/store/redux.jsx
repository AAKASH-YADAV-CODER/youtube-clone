import { configureStore } from "@reduxjs/toolkit";
import { uiReducerFun } from "./ui-slice";
import { chatReducerF } from "./chat-slice";

const store=configureStore({
    reducer: {
        ui: uiReducerFun,
        chat:chatReducerF
    }
})
export default store;