import { configureStore } from "@reduxjs/toolkit"
import auth from './slices/authSlice'
import contacts from './slices/contactsSlice'

export const store = configureStore({
	reducer: { auth, contacts }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch