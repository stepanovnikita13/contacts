import { List, MenuItem, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import useContactsStyles from './Contacts.styled'
import { useDispatch, useSelector } from '../../../hooks/redux'
import ContactsListItem from './Contact/ListItem'
import MoreMenu from '../../common/Menu/MoreMenu'
import { deleteContact, getContacts, setCurrentContact } from '../../../redux/slices/contactsSlice'
import SelectedCounter from '../../common/Navigation/ContactsNavigation/SelectedCounter.t/SelectedCounter'
import Navigation from '../../common/Navigation/Navigation'
import AddButton from '../../common/Buttons/AddButton'

export interface IContactsProps {
	hideContacts: () => void
	isMobile: boolean
}

const Contacts: React.FC<IContactsProps> = (props) => {
	const { hideContacts, isMobile } = props
	const contacts = useSelector(state => state.contacts.contacts)
	const dispatch = useDispatch()

	const [isCheckMode, setIsCheckMode] = useState<boolean>(false)
	const [checkedItems, setCheckedItems] = useState<Array<number>>([])
	const [searchValue, setSearchValue] = useState<string>('')

	const classes = useContactsStyles()

	const filteredContacts = searchValue === '' ? contacts : contacts.filter(contact => {
		return contact.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
			contact.lastName.toLowerCase().includes(searchValue.toLowerCase())
	})

	useEffect(() => {
		dispatch(getContacts())
		setCheckedItems([])
	}, [dispatch, setCheckedItems])
	useEffect(() => {
		if (!isMobile) {
			setIsCheckMode(true)
		}
	}, [isMobile, setIsCheckMode])
	useEffect(() => {
		setCheckedItems([])
	}, [contacts, setCheckedItems])

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
	function openNewContactForm() {
		dispatch(setCurrentContact(-1))
		isMobile && hideContacts()
	}
	function onDelete() {
		dispatch(deleteContact(checkedItems))
		setCheckedItems([])
	}

	return (
		<>
			<div className={isMobile ? 'container' : ''}>
				<Navigation justifyContent='space-between'>
					{checkedItems.length > 0 || (isCheckMode && isMobile)
						? <SelectedCounter onClose={handlerCancelClick} value={checkedItems.length} />
						: <div className='items-center'>
							<TextField size='small' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
							<AddButton onClick={openNewContactForm} />
						</div>
					}
					<MoreMenu>
						{isMobile && !isCheckMode
							? <MenuItem key={0} onClick={() => setIsCheckMode(true)}>Select</MenuItem>
							: [
								<MenuItem key={0} onClick={selectAll}>Select all</MenuItem>,
								<MenuItem key={1} onClick={() => setCheckedItems([])}>Unselect All</MenuItem>
							]
						}
						{checkedItems.length > 0 && <MenuItem onClick={onDelete}>Delete</MenuItem>}
					</MoreMenu>
				</Navigation>
			</div>
			<div className={classes.scrolled}>
				<List className={classes.list} >
					{filteredContacts.map((contact) => {
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
			</div>
		</>
	)
}

export default Contacts