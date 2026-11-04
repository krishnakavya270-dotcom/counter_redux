import { configureStore } from "@reduxjs/toolkit"; 
 import counterSlice from './slices/Counterslice'

const counterStore = configureStore({
    reducer:{
        counterReducer:counterSlice
    }
})
export default counterStore