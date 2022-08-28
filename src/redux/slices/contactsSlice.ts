import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { contactsAPI } from "../../API/contacts-api"
import { IContact, TNewContact } from "../../types/types"
import { RootState } from "../store"

const initialState = {
	contacts: [] as Array<IContact>,
	currentContact: -1,
	error: null as string | null | unknown
}

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		setCurrentContact: (state, action: PayloadAction<number>) => {
			state.currentContact = action.payload
		},
		setContact: (state, action: PayloadAction<IContact>) => {
			state.contacts.push(action.payload)
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
			.addCase(deleteContact.fulfilled, state => {
				state.currentContact = -1
			})
			.addCase(deleteContact.rejected, (state, action) => {
				if (action.payload) {
					state.error = action.payload
				} else {
					state.error = action.error
				}
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.currentContact = action.payload
			})
			.addCase(addContact.rejected, (state, action) => {
				if (action.payload) {
					state.error = action.payload
				} else {
					state.error = action.error
				}
			})
			.addCase(changeContact.rejected, (state, action) => {
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
		if (res?.status === 200) {
			return res.data
		} else {
			return rejectWithValue(res?.statusText)
		}
	}
)

export const deleteContact = createAsyncThunk(
	'contacts/delete',
	async (payload: number | Array<number>, { rejectWithValue, dispatch }) => {
		let res
		if (typeof payload === 'number') {
			res = await contactsAPI.delete(payload)
		} else if (Array.isArray(payload)) {
			res = await contactsAPI.deleteMultiple(payload)
		}
		if (res?.status === 200) {
			dispatch(getContacts())
		} else {
			return rejectWithValue(res?.statusText)
		}
	}
)

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (payload: TNewContact, { rejectWithValue, dispatch }) => {
		const res = await contactsAPI.addContact(payload)
		if (res?.status === 201) {
			dispatch(getContacts())
			return res.data.id
		} else {
			return rejectWithValue(res?.statusText)
		}
	}
)

export const changeContact = createAsyncThunk(
	'contacts/changeContact',
	async (payload: { data: TNewContact, id: number }, { rejectWithValue, dispatch }) => {
		const res = await contactsAPI.changeContact(payload.data, payload.id)
		if (res?.status === 200) {
			dispatch(getContacts())
		} else {
			return rejectWithValue(res?.statusText)
		}
	}
)

export const { setCurrentContact } = contactsSlice.actions
export default contactsSlice.reducer