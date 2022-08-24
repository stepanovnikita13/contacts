import { List, Typography } from '@mui/material'
import { useState } from 'react'
import useContactsStyles from './Contacts.styled'
import { useSelector } from '../../../hooks/redux'
import CancelButton from '../../common/Buttons/CancelButton'
import { IContactsProps } from './ContactsContainer'
import ContactsListItem from './Contact/ContactListItem'

const Contacts: React.FC<IContactsProps> = (props) => {
	const { hideContacts, isMobile } = props
	const contacts = useSelector(state => state.contacts.contacts)

	const [isCheckMode, setIsCheckMode] = useState(false)
	const [checkedItems, setCheckedItems] = useState<Array<number>>([])

	const classes = useContactsStyles()
	const navigationClassNames = [
		classes.navigation,
		isMobile && 'container'
	].join(' ')

	const handlerToggle = (value: number) => {
		const newCheckedItems = [...checkedItems]
		const currentIndex = checkedItems.indexOf(value);
		if (currentIndex === -1) {
			newCheckedItems.push(value)
		} else {
			newCheckedItems.splice(currentIndex, 1)
		}
		setCheckedItems(newCheckedItems)
	}

	function handlerCancelClick() {
		setIsCheckMode(false)
		setCheckedItems([])
	}

	return (
		<div className={classes.container}>
			<div className={navigationClassNames} >
				{isCheckMode || checkedItems.length > 0
					? <Typography>
						<CancelButton onClick={() => handlerCancelClick()} />
						{`Selected ${checkedItems.length} contact`}
					</Typography>
					: <Typography>Search and add contact</Typography>
				}
			</div>
			<List disablePadding>
				{contacts.map((contact) => {
					return <ContactsListItem
						key={contact.id}
						contact={contact}
						onCheckboxChange={handlerToggle}
						checked={checkedItems.indexOf(contact.id) !== -1}
						isCheckMode={isCheckMode}
						hideContacts={hideContacts}
						runCheckMode={() => setIsCheckMode(true)}
					/>
				})}

			</List>
		</div >
	)
}

export default Contacts