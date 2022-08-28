import { colors, Typography } from "@mui/material"
import CustomAvatar from "../../common/Avatar/Avatar"
import useCardStyles from "./Card.styled"
import PhoneIcon from '@mui/icons-material/Phone'
import { AsYouType } from 'libphonenumber-js'
import { IContact } from "../../../types/types"
import Navigation from "../../common/Navigation/Navigation"
import DeleteButton from "../../common/Buttons/DeleteButton"
import EditButton from "../../common/Buttons/EditButton"
import DeleteDialog from "../../common/Dialogs/DeleteDialog/DeleteDialog"
import { useState } from "react"

export interface ICardProps {
	contact: IContact
	onEdit: () => void
	onDelete: () => void
}

const Card: React.FC<ICardProps> = props => {
	const { contact, onEdit, onDelete } = props
	const { firstName, lastName, description, phoneNumbers, photo } = contact
	const fullName = `${firstName} ${lastName}`
	const [open, setOpen] = useState(false)

	const classes = useCardStyles()
	const cardClassNames = [
		classes.card,
	].join(' ')

	function handlerDelete() {
		setOpen(true)
	}
	function handlerCloseDialog() {
		setOpen(false)
	}
	return (
		<div className={cardClassNames}>
			<Navigation justifyContent='flex-end'>
				<DeleteButton onClick={handlerDelete} />
				<EditButton onClick={onEdit} />
				<DeleteDialog
					open={open}
					onClose={handlerCloseDialog}
					handlerDelete={onDelete}
					title={`Delete ${firstName} from your contact list?`}
				/>
			</Navigation>
			<div className={classes.cardWrapper}>
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
						if (!number) return null
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
		</div>
	)
}

export default Card