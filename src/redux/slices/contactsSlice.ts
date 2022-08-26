import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { contactsAPI } from "../../API/contacts-api"
import { IContact } from "../../types/types"
import { RootState } from "../store"

const initialState = {
	contacts: [] as Array<IContact>,
	currentContact: 0,
	currentContact2: {} as IContact | {},
	error: null as string | null | unknown
}

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		setCurrentContact: (state, action: PayloadAction<number>) => {
			state.currentContact = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getContacts.fulfilled, (state, action) => {
				state.contacts = action.payload
			})
			.addCase(getContacts.rejected, (state, action) => {
				if (action.payload) {
					state.error = action.payload
				} else {
					state.error = action.error
				}
			})
	}
})

export const selectFullName = (state: RootState, id: number) => {
	const contact = state.contacts.contacts.find(item => item.id === id)
	return `${contact?.firstName} ${contact?.lastName}`
}

export const getContacts = createAsyncThunk(
	'contacts/getContacts',
	async (payload, { rejectWithValue }) => {
		const res = await contactsAPI.getContactList()
		if (res.data && res?.resultCode === 1) {
			return res.data
		} else {
			return rejectWithValue(res.message as string | null)
		}
	}
)

export const { setCurrentContact } = contactsSlice.actions
export default contactsSlice.reducer