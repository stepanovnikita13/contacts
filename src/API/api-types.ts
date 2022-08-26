export type ResultCode = 0 | 1

export type ResponseData<D> = {
	resultCode: ResultCode
	message: null | string
	data: D
}

export type Login = {
	accessToken: string,
}
