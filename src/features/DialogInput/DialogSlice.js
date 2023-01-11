import { createSlice } from "@reduxjs/toolkit";

export const DialogSlice = createSlice({
    name: "dialogInput",
    initialState: {
        inpVal: "han bhai state me hu"
    },
    reducers: {
        setValue: (state, action) => {
            state.inpVal = action.payload
            console.log("from actionPayload",action.payload)
        }
    }
})


export const { setValue } = DialogSlice.actions
export default DialogSlice.reducer
