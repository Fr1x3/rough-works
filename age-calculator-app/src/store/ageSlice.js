import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: {
        days: '- -',
        months: '- -',
        years: '- -',
    }
    
}

export const ageSlice = createSlice({
    name: 'age',
    initialState,
    reducers: {
        setAge: (state, action) => {
            state.result = {...state.result, ...action.payload }
        }
    }
})

export const { setAge } = ageSlice.actions
export const ageResult = (state) => state.age.result
export default ageSlice.reducer