import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from './reducers/catalogSlice'
import searchSlice from './reducers/SearcSlice'
import usersSlice from './reducers/usersSlice'
import logedUserSlice from './reducers/logedUserSlice'

export const store = configureStore({
    reducer : {
        catalog : catalogSlice,
        search : searchSlice,
        users : usersSlice,
        logedUser : logedUserSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;