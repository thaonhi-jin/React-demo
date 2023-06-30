import { createSlice } from "@reduxjs/toolkit";

export const handleDataForm = createSlice({
    name: 'form',
    initialState: {
        name: "",
        time: "",
        deadline: "",
    },
    reducers: {
        setInfoTask: {
            reducer: (state, action) => {
                state[action.payload.key] = action.payload.value
            },
            prepare: (key, value) => {
                return {
                    payload: {
                        key,
                        value
                    }
                }
            }
        }
    }
})

export const { setInfoTask } = handleDataForm.actions
export default handleDataForm.reducer