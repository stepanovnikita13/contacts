import axios from "axios";
import { IContact } from "../types/types";
import { instance } from "./api"
import { ResponseData } from "./api-types";

export const contactsAPI = {
	async getContactList() {
		try {
			const res = await instance.get<Array<IContact>>('contacts')
			return {
				resultCode: 1,
				message: res.statusText,
				data: res.data
			}
		} catch (err) {
			if (axios.isAxiosError(err) && err.response) {
				console.log(err.message)
				return err.response.data as ResponseData<null>
			}
			return {
				resultCode: 0,
				message: 'Fatal Error!!!',
				data: null
			} as ResponseData<null>
		}
	}
}