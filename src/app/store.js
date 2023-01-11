import { configureStore } from "@reduxjs/toolkit";
import DialogSlice from "../features/DialogInput/DialogSlice";

export default configureStore({
    reducer: {
        dialogInpVal: DialogSlice
    }
})
