import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counterVal: false },
    reducers: {
        change: (state, action) => {
            state.counterVal = action.payload
        }

    }
})

export const counterActions = counterSlice.actions
export default counterSlice