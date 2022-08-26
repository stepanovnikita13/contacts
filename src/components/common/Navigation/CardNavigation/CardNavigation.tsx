import { Button, Dialog, DialogProps, DialogTitle } from "@mui/material"
import { useState } from "react"
import DeleteButton from "../../Buttons/DeleteButton"
import EditButton from "../../Buttons/EditButton"
import useCardNavigationStyles from "./CardNavigation.styled"

export interface ICardNavigationProps {
	fullName: string
}

export interface DeleteDialogProps extends DialogProps {
	title: string
	onClose: () => void
}
const DeleteDialog: React.FC<DeleteDialogProps> = (props) => {
	const { title, onClose } = props

	function handlerSuccess() {
		//fn delete contact
		onClose()
	}
	return (
		<Dialog {...props}>
			<DialogTitle>{title}</DialogTitle>
			<Button onClick={handlerSuccess}>Yes</Button>
			<Button onClick={onClose} >No</Button>
		</Dialog>
	)
}
const CardNavigation: React.FC<ICardNavigationProps> = (props) => {
	const { fullName } = props
	const [open, setOpen] = useState(false)

	const classes = useCardNavigationStyles()

	function handlerDeleteClick() {
		setOpen(true)
	}
	function handlerCloseDialog() {
		setOpen(false)
	}
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<DeleteButton onClick={handlerDeleteClick} />
				<EditButton />
				<DeleteDialog
					open={open}
					onClose={handlerCloseDialog}
					title={`Delete ${fullName} from your contact list?`}
				/>
			</div>
		</div>
	)
}

export default CardNavigation