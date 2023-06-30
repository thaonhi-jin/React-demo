import { createSlice } from "@reduxjs/toolkit";

export const planReducer = createSlice({
    name: 'plan',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            state.splice(action.payload, 1)
        }
    }
})



export const { addTask, deleteTask } = planReducer.actions
export default planReducer.reducer