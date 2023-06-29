import { createSlice } from '@reduxjs/toolkit'


export const ShoppingSlice = createSlice({
    name: 'shoppingList',
    initialState: [],
    reducers: {
        Add: (state, action) => {
            //payload : item name cần add
            state.push(action.payload)
        },
        Delete: (state, action) => {
            //payload : index của item cần xóa
            state.splice(action.payload, 1)
        }
    }
})

export const { Add, Delete } = ShoppingSlice.actions
export default ShoppingSlice.reducer