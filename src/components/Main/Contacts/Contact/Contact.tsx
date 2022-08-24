import { Typography } from "@mui/material";
import React from "react";
import CustomAvatar from "../../../common/Avatar/Avatar";
import useContactNameStyles from "./Contact.styled";

export interface IContactProps {
	firstName: string
	lastName: string
	photo: string
	description: string
}

const Contact: React.FC<IContactProps> = React.memo((props) => {
	const { firstName, lastName, photo, description } = props
	const fullName: string = firstName + ' ' + lastName
	const classes = useContactNameStyles()

	return (
		<div className={classes.container}>
			<CustomAvatar
				alt={fullName}
				name={fullName}
				src={photo}
				sx={{
					fontSize: '1.4em',
					width: 50,
					height: 50
				}}
			/>
			<div className={classes.textBlock}>
				<Typography fontWeight='bold'>
					{`${firstName} ${lastName}`}
				</Typography>
				<Typography color={'text.secondary'} fontSize='.9em'>
					{description}
				</Typography>
			</div>
		</div>
	)
})

export default Contact