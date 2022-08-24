import { Typography } from "@mui/material"
import { useSelector } from "../../../hooks/redux"
import { Contact, selectFullName } from "../../../redux/slices/contactsSlice"
import CustomAvatar from "../../common/Avatar/Avatar"
import useContactCardStyles from "./ContactCard.styled"
import PhoneIcon from '@mui/icons-material/Phone'

export interface IContactCardProps {
	isMobile: boolean
}

const ContactCard: React.FC<IContactCardProps> = (props) => {
	const { isMobile } = props
	const currentId = useSelector(state => state.contacts.currentContact)
	const contact = useSelector(state => state.contacts.contacts.find(item => item.id === currentId)) as Contact
	const { firstName, lastName, description, phoneNumber, photo } = contact
	const fullName = `${firstName} ${lastName}`

	const classes = useContactCardStyles()
	const cardClassNames = [
		classes.card,
		isMobile && 'container'
	].join(' ')

	return (
		<div className={cardClassNames}>
			<div className={classes.header}>
				<CustomAvatar
					alt={fullName}
					name={fullName}
					sx={{
						fontSize: '3em',
						width: 140,
						height: 140,
						marginTop: 3
					}}
					src={photo}
				/>
				<div>
					<Typography fontWeight='bold' fontSize='1.8em' mt={3}>{fullName}</Typography>
				</div>
				<div>
					<Typography color={'text.secondary'} >{description}</Typography>
				</div>
			</div>
			<div><PhoneIcon sx={{ color: "#fdc60d" }} />{phoneNumber}</div>

		</div>
	)
}

export default ContactCard