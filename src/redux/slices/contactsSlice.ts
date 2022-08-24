import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useSelector } from "../../hooks/redux"
import { RootState } from "../store"

export type Contact = {
	id: number
	firstName: string
	lastName: string
	description: string
	phoneNumber: string
	photo: string
}
const initialState = {
	contacts: [
		{ id: 0, firstName: 'Alexander', lastName: 'Ivanov', description: 'Description of contact', phoneNumber: "+79881234567", photo: '' },
		{ id: 1, firstName: 'Dean', lastName: 'Winchester', description: 'Monster hunter', phoneNumber: "+79887654321", photo: 'https://dere.shikimori.one/system/people/preview/12149.jpg?1633559552' },
		{ id: 2, firstName: 'Ivan', lastName: 'Urgant', description: 'Russian showman', phoneNumber: "+79610987654", photo: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/eb718db5-920f-45c9-9e80-dfa6acbbfa36/280x420' },
		{ id: 3, firstName: 'James', lastName: 'Hetfield', description: 'Metallica frontman', phoneNumber: "+66666666666", photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_yzDj9tjxKFgwBEgpC3AjJcbU1YQeTXwNw&usqp=CAU' },
		{ id: 4, firstName: 'John', lastName: 'Wick', description: 'Baba Yaga', phoneNumber: "+79895553535", photo: 'https://3238leblogdemarvelll-1278.kxcdn.com/wp-content/uploads/2014/10/john-wick-keanu-reeves-banniere-850x446.jpg' },
		{ id: 5, firstName: 'Jack', lastName: '', description: '', phoneNumber: "+79654575435", photo: '' },
		{ id: 6, firstName: 'Jackie', lastName: 'Smith', description: '', phoneNumber: "+79453473485", photo: '' },
		{ id: 7, firstName: 'Edward', lastName: '', description: 'Bartender', phoneNumber: "+79654575435", photo: '' },
		{ id: 8, firstName: 'Tony', lastName: 'Stark', description: '', phoneNumber: "+9897654321", photo: '' },
		{ id: 9, firstName: 'Oleg', lastName: 'Tinkoff', description: 'Bankir', phoneNumber: "+79123456789", photo: '' },
	] as Array<Contact>,
	currentContact: 0
}

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		setCurrentContact: (state, action: PayloadAction<number>) => {
			state.currentContact = action.payload
		}
	}
})

export const { setCurrentContact } = contactsSlice.actions

export const selectFullName = (state: RootState, id: number) => {
	const contact = state.contacts.contacts.find(item => item.id === id)
	return `${contact?.firstName} ${contact?.lastName}`
}

export default contactsSlice.reducer