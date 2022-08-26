import axios from "axios"
import { axiosLogout, instance, setAuthToken } from "./api"
import { ResponseData, Login } from "./api-types"

export const ACCESS_TOKEN = 'accessToken'

export const authAPI = {
	async login(username: string, password: string) {
		try {
			const res = await instance.post<ResponseData<Login>>(`auth/login`, { username, password })
			const token = res.data.data.accessToken
			localStorage.setItem(ACCESS_TOKEN, token)
			return res.data
		} catch (err) {
			if (axios.isAxiosError(err) && err.response) {
				console.log(err.message)
				return err.response.data as ResponseData<Login>
			}
		}
	},
	async fakeLogout(): Promise<ResponseData<null>> {
		try {
			const res = await axiosLogout()
			return res.data
		} catch (err) {
			let message: string
			if (err instanceof Error) {
				message = err.message
			}
			message = String(err)
			return {
				resultCode: 0,
				message: message,
				data: null
			}
		}
	},
	async authMe(token: string | null) {
		if (token) {
			setAuthToken(token)
		}
		try {
			const res = await instance.get<ResponseData<null>>('auth/me')
			return res.data
		} catch (err) {
			if (axios.isAxiosError(err) && err.response) {
				console.log(err.message)
				return err.response.data as ResponseData<null>
			}
		}
	}
}