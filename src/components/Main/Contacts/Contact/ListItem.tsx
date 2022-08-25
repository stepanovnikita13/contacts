import { Checkbox, ListItem, ListItemButton, useMediaQuery } from '@mui/material';
import React from 'react';
import { useLongPress } from '../../../../hooks/hooks';
import { useDispatch, useSelector } from '../../../../hooks/redux';
import { Contact as PContact, setCurrentContact } from '../../../../redux/slices/contactsSlice';
import { device } from '../../../../styles/device';
import Contact from './Contact';
import useListItemStyles from './ListItem.styled';

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

	const longTouchEvents = useLongPress({
		onLongPress: isMobile ? handlerLongPress : () => { },
		onClick: handlerClick
	}, { delay: 500 })

	const classnames = useListItemStyles()

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
			<ListItemButton  {...longTouchEvents} sx={{ paddingLeft: isCheckMode ? 5 : 1 }} >
				<Contact {...contactProps} />
			</ListItemButton>
			{
				(isCheckMode) &&
				<div className={classnames.checkbox}>
					<Checkbox
						size="small"
						edge="start"
						checked={checked}
						onChange={() => onCheckboxChange(id)}
						value='id'
					/>
				</div>
			}
		</ListItem>
	)
}

export default ContactsListItem