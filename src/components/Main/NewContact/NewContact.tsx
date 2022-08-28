import { Typography } from "@mui/material"
import { useDispatch } from "../../../hooks/redux"
import { addContact } from "../../../redux/slices/contactsSlice"
import { TNewContact } from "../../../types/types"
import ContactForm from "../ContactForm/ContactForm"
import useNewContactStyles from "./NewContact.styled"

const NewContact: React.FC = props => {
	const classes = useNewContactStyles()
	const dispatch = useDispatch()

	function onSubmit(data: TNewContact) {
		dispatch(addContact(data))
	}
	return (
		<div className={classes.container}>
			<Typography position='absolute' variant='h5' >Add new contact</Typography>
			<ContactForm onSubmit={onSubmit} />
		</div>
	)
}

export default NewContact