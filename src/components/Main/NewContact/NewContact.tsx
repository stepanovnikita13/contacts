import { Typography } from "@mui/material"
import SuccessButton from "../../common/Buttons/SuccessButton"
import Navigation from "../../common/Navigation/Navigation"
import ContactForm from "../ContactForm/ContactForm"
import useNewContactStyles from "./NewContact.styled"

export interface INewContactProps {
}

const NewContact: React.FC<INewContactProps> = (props) => {
	const classes = useNewContactStyles()

	function onSubmit() {

	}
	return (
		<div className={classes.container}>
			<Typography position='absolute' variant='h5' >Add new contact</Typography>
			<ContactForm />
		</div>
	)
}

export default NewContact