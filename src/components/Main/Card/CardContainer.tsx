import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../../hooks/redux";
import { changeContact, deleteContact } from "../../../redux/slices/contactsSlice";
import { IContact, TNewContact } from "../../../types/types";
import Card from "./Card";
import useCardContainerStyles from "./CardContainer.styled";
import ContactForm from "../ContactForm/ContactForm";
import NewContact from "../NewContact/NewContact";
import { Typography } from "@mui/material";

export interface IContactContainerProps {
}
export type StyleProps = {
	editMode: boolean
}
const CardContainer: React.FC<IContactContainerProps> = (props) => {
	const [editMode, setEditMode] = useState(false)
	const dispatch = useDispatch()

	const currentId = useSelector(state => state.contacts.currentContact)
	const contact = useSelector(state => state.contacts.contacts.find(item => item.id === currentId)) as IContact

	const classes = useCardContainerStyles()

	useEffect(() => {
		setEditMode(false)
	}, [currentId, setEditMode])

	function handlerSubmit(data: TNewContact) {
		dispatch(changeContact({ data, id: currentId }))
		setEditMode(false)
	}

	if (currentId === -1) return <NewContact />
	else if (!contact) return null
	return (
		<div className={classes.container} >

			<div className={classes.inner}>
				{!editMode
					? <Card
						contact={contact}
						onEdit={() => setEditMode(true)}
						onDelete={() => dispatch(deleteContact(currentId))}
					/>
					: <>
						<Typography position='absolute' variant='h5' >Edit</Typography>
						<ContactForm contact={contact} onSubmit={handlerSubmit} onClose={() => setEditMode(false)} />
					</>
				}
			</div>
		</div >
	)
}

export default CardContainer