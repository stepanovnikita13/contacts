import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ACCESS_TOKEN, authAPI } from "../../API/auth-api"

const initialState = {
	isAuth: false,
	error: null as string | null,
	initialized: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, action) => {
				state.error = action.payload
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.error = action.payload
			})
			.addCase(authMe.fulfilled, state => {
				state.initialized = true
			})
	}
})

export const login = createAsyncThunk(
	'auth/login',
	async (payload: { username: string, password: string }, thunkAPI) => {
		const data = await authAPI.login(payload.username, payload.password)
		if (data && data.resultCode === 1) {
			thunkAPI.dispatch(authMe())
			return null
		}
		return data?.message as string | null
	}
)

export const logout = createAsyncThunk(
	'auth/logout',
	async (payload, thunkAPI) => {
		const data = await authAPI.fakeLogout()
		if (data && data.resultCode === 1) {
			thunkAPI.dispatch(authSlice.actions.setAuth(false))
			return null
		}
		return data?.message as string | null
	}
)

export const authMe = createAsyncThunk(
	'auth/me',
	async (payload, thunkAPI) => {
		const token = localStorage.getItem(ACCESS_TOKEN)
		const data = await authAPI.authMe(token)
		if (data && data.resultCode === 1) {
			thunkAPI.dispatch(authSlice.actions.setAuth(true))
		}
	}
)

export default authSlice.reducer