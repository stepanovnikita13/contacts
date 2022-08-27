import { List, MenuItem, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import useContactsStyles from './Contacts.styled'
import { useDispatch, useSelector } from '../../../hooks/redux'
import ContactsListItem from './Contact/ListItem'
import MoreMenu from '../../common/Menu/MoreMenu'
import { getContacts } from '../../../redux/slices/contactsSlice'
import SelectedCounter from '../../common/Navigation/ContactsNavigation/SelectedCounter.t/SelectedCounter'
import Navigation from '../../common/Navigation/Navigation'

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

	return (
		<>
			<Navigation justifyContent='space-between'>
				{checkedItems.length > 0 || (isCheckMode && isMobile)
					? <SelectedCounter onClose={handlerCancelClick} value={checkedItems.length} />
					: <Typography>Search and add contact</Typography>
				}
				<MoreMenu>
					{isMobile && !isCheckMode
						? <MenuItem key={0} onClick={() => setIsCheckMode(true)}>Select</MenuItem>
						: [
							<MenuItem key={0} onClick={selectAll}>Select all</MenuItem>,
							<MenuItem key={1} onClick={() => setCheckedItems([])}>Unselect All</MenuItem>
						]
					}
					{checkedItems.length > 0 && <MenuItem onClick={() => { }}>Delete</MenuItem>}
				</MoreMenu>
			</Navigation>
			<div className={classes.scrolled}>
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
			</div>
		</>
	)
}

export default Contacts