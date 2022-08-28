import axios, { AxiosResponse } from "axios";
import { IContact, TNewContact } from "../types/types";
import { instance } from "./api"

const PATH = 'contacts/'

function catchAxios(err: unknown) {
	if (axios.isAxiosError(err) && err.response) {
		console.log(err.message)
		return err.response.data as AxiosResponse
	}
}
export const contactsAPI = {
	async getContactList() {
		try {
			const res = await instance.get<Array<IContact>>(PATH + '?_sort=firstName')
			return res
		} catch (err) {
			catchAxios(err)
		}
	},
	async delete(id: number) {
		try {
			const res = await instance.delete(PATH + id)
			return res
		} catch (err) {
			catchAxios(err)
		}
	},
	async addContact(data: TNewContact) {
		try {
			const res = await instance.post<IContact>(PATH, data)
			return res
		} catch (err) {
			catchAxios(err)
		}
	},
	async changeContact(data: TNewContact, id: number) {
		try {
			const res = await instance.put<IContact>(PATH + id, data)
			return res
		} catch (err) {
			catchAxios(err)
		}
	},
	async deleteMultiple(ids: Array<number>) {
		try {
			const delFetch = ids.map(id => {
				return instance.delete(PATH + id)
			})
			const res = await Promise.all(delFetch)
			return res[res.length - 1]
		} catch (err) {
			catchAxios(err)
		}
	}
}