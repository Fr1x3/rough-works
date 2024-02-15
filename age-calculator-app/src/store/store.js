import { configureStore } from '@reduxjs/toolkit'
import ageReducer from './ageSlice'
import birthdayReducer from './birthdayInputSlice'

export const store = configureStore({
    reducer: {
        age: ageReducer,
        birthday: birthdayReducer,
    },
})