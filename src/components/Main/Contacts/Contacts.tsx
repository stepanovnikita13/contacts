import { List, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import useContactsStyles from './Contacts.styled'
import { useDispatch, useSelector } from '../../../hooks/redux'
import CancelButton from '../../common/Buttons/CancelButton'
import ContactsListItem from './Contact/ListItem'
import MoreMenu, { Field } from '../../common/Menu/MoreMenu'
import { getContacts } from '../../../redux/slices/contactsSlice'

export interface IContactsProps {
	hideContacts: () => void
	isMobile: boolean
}

const Contacts: React.FC<IContactsProps> = (props) => {
	const { hideContacts, isMobile } = props
	const contacts = useSelector(state => state.contacts.contacts)
	const dispatch = useDispatch()

	const [isCheckMode, setIsCheckMode] = useState(false)
	const [checkedItems, setCheckedItems] = useState<Array<number>>([])

	const classes = useContactsStyles()
	const navigationClassNames = [
		classes.navigation,
		isMobile && 'container'
	].join(' ')

	useEffect(() => {
		dispatch(getContacts())
	}, [])
	useEffect(() => {
		if (!isMobile) {
			setIsCheckMode(true)
		}
	}, [isMobile, setIsCheckMode])

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
		isMobile && setIsCheckMode(false)
		setCheckedItems([])
	}

	function selectAll() {
		setCheckedItems(contacts.map(item => item.id))
	}

	const mobileMenu: Array<Field> = []
	if (!isCheckMode) {
		mobileMenu.push({ 'Select': () => setIsCheckMode(true) })
	} else {
		mobileMenu.push({ 'Select All': () => selectAll() })
		mobileMenu.push({ 'Unselect All': () => setCheckedItems([]) })
	}
	if (checkedItems.length > 0) {
		mobileMenu.push({ 'Delete': () => { } })
	}
	return (
		<div className={classes.container}>
			<div className={navigationClassNames} >
				{checkedItems.length > 0 || (isCheckMode && isMobile)
					? <div className={classes.selectedCounter}>
						<CancelButton onClick={() => handlerCancelClick()} />
						<Typography>
							{`Selected ${checkedItems.length} contact`}
						</Typography>
					</div>
					: <Typography>Search and add contact</Typography>

				}
				<MoreMenu fields={mobileMenu} />
			</div>
			<List className={classes.list} >
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