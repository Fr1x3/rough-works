import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputData: {
        day: null,
        month: null,
        year: null,
    },
    inputErrors: {
        day: null,
        month: null,
        year: null,
        date: null,
    }
}

const birthDayInputSlice = createSlice({
    name: 'bithday',
    initialState,
    reducers: {
        setInput: (state, action) => {
            const {name, value} = action.payload
            
            state.inputData[name] = value
        },

        setErrors: (state, action) => {
            state.inputErrors = {...state.inputErrors, ...action.payload}
        }
    }
})

export const { setInput, setErrors} = birthDayInputSlice.actions
export const selectedInput = (state) => state.birthday.inputData
export const inputErrors = (state) => state.birthday.inputErrors
export default birthDayInputSlice.reducer