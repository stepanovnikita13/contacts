import axios from "axios"
import { isNullishCoalesce } from "typescript"
import type { ResponseData } from "./api-types"

export const instance = axios.create(
	{
		baseURL: "http://localhost:8080/",
	}
)

export const setAuthToken = (token: string) => {
	instance.defaults.headers.common['authorization'] = getJWTToken(token)

	function getJWTToken(token: string): string {
		return `Bearer ${token}` ?? ''
	}
}

export type LogoutData = {
	data: ResponseData<null>
}
export const axiosLogout = () => {
	return new Promise<LogoutData>((resolve, reject) => {
		const token = localStorage.getItem('accessToken')
		setTimeout(() => {
			if (token) {
				localStorage.removeItem('accessToken')
				resolve({
					data: {
						resultCode: 1,
						message: null,
						data: null
					}
				})
			} else {
				reject(new Error("Error! Field doesn't exist"))
			}
		}, 200)
	})
}