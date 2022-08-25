import { colors, Typography } from "@mui/material"
import { useSelector } from "../../../hooks/redux"
import { Contact } from "../../../redux/slices/contactsSlice"
import CustomAvatar from "../../common/Avatar/Avatar"
import useContactCardStyles from "./ContactCard.styled"
import PhoneIcon from '@mui/icons-material/Phone'
import { AsYouType } from 'libphonenumber-js'

export interface IContactCardProps {
	isMobile: boolean
}

const ContactCard: React.FC<IContactCardProps> = (props) => {
	const { isMobile } = props
	const currentId = useSelector(state => state.contacts.currentContact)
	const contact = useSelector(state => state.contacts.contacts.find(item => item.id === currentId)) as Contact
	const { firstName, lastName, description, phoneNumbers, photo } = contact
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
			<div className={classes.contact}>
				{Object.entries(phoneNumbers).map((item, index) => {
					const number = item[1]
					const cathegory = item[0].toUpperCase()
					return (
						<div key={index}>
							<PhoneIcon sx={{ color: "#fdc60d" }} />
							<div>
								<Typography fontSize={'1em'}>{new AsYouType().input(number)}</Typography>
								<Typography lineHeight={1.5} color={colors.grey[500]} fontSize={'.65em'} fontWeight={'bold'}>{cathegory}</Typography>
							</div>
						</div>
					)
				})}

			</div>
		</div>
	)
}

export default ContactCard