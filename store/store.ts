import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from './reducers/catalogSlice'
import searchSlice from './reducers/SearcSlice'

export const store = configureStore({
    reducer : {
        catalog : catalogSlice,
        search : searchSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;