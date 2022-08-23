import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

const initialState = {
	isAuth: false
}

type InitialState = typeof initialState

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		me: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		}
	}
})

export const selectIsAuth = (state: RootState) => state.auth.isAuth

export default authSlice.reducer