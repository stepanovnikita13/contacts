import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

const initialState = {
	isAuth: true
}

type InitialState = typeof initialState

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: state => {
			state.isAuth = true
		},
		logout: state => {
			state.isAuth = false
		}
	}
})

export default authSlice.reducer