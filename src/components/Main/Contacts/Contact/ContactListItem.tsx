import { Checkbox, ListItem, ListItemButton, SelectChangeEvent, useMediaQuery } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { useLongPress } from '../../../../hooks/hooks';
import { useDispatch, useSelector } from '../../../../hooks/redux';
import { Contact as PContact, setCurrentContact } from '../../../../redux/slices/contactsSlice';
import { device } from '../../../../styles/device';
import Contact from './Contact';

export interface IContactsListItemProps {
	contact: PContact
	onCheckboxChange: (id: number) => void
	hideContacts: () => void
	runCheckMode: () => void
	isCheckMode: boolean
	checked: boolean
}

const ContactsListItem: React.FC<IContactsListItemProps> = (props) => {
	const { contact, onCheckboxChange, hideContacts, isCheckMode, runCheckMode, checked } = props
	const { id, ...contactProps } = contact
	const selectedContact = useSelector(state => state.contacts.currentContact)

	const isMobile = !useMediaQuery(device.tabletS)
	const dispatch = useDispatch()

	const longToushEvents = useLongPress({
		onLongPress: isMobile ? handlerLongPress : () => { },
		onClick: handlerClick
	}, { delay: 500 })
	const listItemButtonProps = !isCheckMode ? longToushEvents : null

	function handlerLongPress() {
		runCheckMode()
		onCheckboxChange(id)
	}

	function handlerClick() {
		hideContacts()
		dispatch(setCurrentContact(id))
	}

	return (
		<ListItem
			disablePadding
			selected={!isMobile && id === selectedContact}
		>
			<ListItemButton  {...listItemButtonProps} >
				{
					(isCheckMode || !isMobile) && <div>
						<Checkbox
							size="small"
							edge="start"
							checked={checked}
							onClick={() => onCheckboxChange(id)}
							value='id'
						/>
					</div>
				}
				<Contact {...contactProps} />
			</ListItemButton>
		</ListItem>
	)
}

export default ContactsListItem