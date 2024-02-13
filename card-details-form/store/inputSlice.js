import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cardHolderName: "",
    cardNumber: "",
    month: "",
    year: '',
    cvc: '',
    errors: {
        cardHolderName: "",
        cardNumber: "",
        month: "",
        year: '',
        cvc: '', 
    }
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setInputValue: (state, action) => {
            
            const {inputName, value} = action.payload
            state[inputName] = value
        },
        setErrors: (state, action) => {
            const { name, errorMessage } = action.payload
            console.log(errorMessage)
            state.errors[name] = errorMessage
        },
        reset: () => {
            return initialState
        }
    }
})

export const {setInputValue, setErrors} = inputSlice.actions
export const selectInputValues = (state) => state.input
export default inputSlice.reducer