import axios, { AxiosResponse } from "axios";
import { IContact } from "../types/types";
import { instance } from "./api"
import { ResponseData } from "./api-types";

function catchAxios(err: unknown) {
	if (axios.isAxiosError(err) && err.response) {
		console.log(err.message)
		return err.response.data as AxiosResponse
	}
}
export const contactsAPI = {
	async getContactList() {
		try {
			const res = await instance.get<Array<IContact>>('contacts')
			return res
		} catch (err) {
			catchAxios(err)
		}
	},
	async delete(id: number) {
		try {
			const res = await instance.delete(`contacts/${id}`)
			return res
		} catch (err) {
			catchAxios(err)
		}
	}
}