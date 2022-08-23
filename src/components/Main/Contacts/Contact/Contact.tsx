import { Avatar, Checkbox, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { useLongPress } from "../../../../hooks/hooks";
import stringAvatar, { stringToColor } from "../../../../utils/avatar";
import useContactNameStyles from "./Contact.styled";

export interface IContactProps {
	isContactFocused: boolean
	setIsContactFocused: Dispatch<SetStateAction<boolean>>
	setHidden: Dispatch<SetStateAction<boolean>>
}

const Contact: React.FC<IContactProps> = (props) => {
	const { isContactFocused, setIsContactFocused } = props
	const [checked, setChecked] = useState(false)
	const classes = useContactNameStyles()
	const longToushEvents = useLongPress(
		{
			onLongPress: handlerLongPress,
			onClick: () => console.log('click')
		},
		{
			delay: 2000
		}
	)
	function handlerLongPress() {
		setIsContactFocused(true)
		setChecked(true)
	}
	const handlerCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(value => !value)
	}

	return (
		<div className={classes.container} {...longToushEvents}>
			{isContactFocused && <div className={classes.check}>
				<Checkbox
					checked={checked}
					onChange={handlerCheckboxClick}
					value='contactId'
				/>
			</div>}
			<Avatar
				alt='Name'
				children={stringAvatar('Name Lastname')}
				src='url'
				sx={{
					width: 50,
					height: 50,
					bgcolor: stringToColor('Name Lastname'),
					fontSize: '1.4em'
				}}
			/>
			<div className={classes.textBlock}>
				<Typography fontWeight='bold'>
					Name Lastname
				</Typography>
				<Typography color={'text.secondary'} fontSize='.9em'>
					Description of contact
				</Typography>
			</div>
		</div>
	)
}

export default Contact