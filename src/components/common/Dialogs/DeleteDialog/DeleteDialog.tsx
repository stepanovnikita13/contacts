import { Button, Dialog, DialogProps, DialogTitle, useMediaQuery } from "@mui/material"
import { device } from "../../../../styles/device"

export interface DeleteDialogProps extends DialogProps {
	title: string
	onClose: () => void
	handlerDelete: () => void
}

const DeleteDialog: React.FC<DeleteDialogProps> = (props) => {
	const { title, onClose, handlerDelete, ...rest } = props
	const isMobile = !useMediaQuery(device.tabletS)
	function handlerSuccess() {
		handlerDelete()
		onClose()
	}
	return (
		<Dialog onClose={onClose} {...rest} fullScreen={isMobile}>
			<DialogTitle>{title}</DialogTitle>
			<Button onClick={handlerSuccess}>Yes</Button>
			<Button onClick={onClose} >No</Button>
		</Dialog>
	)
}

export default DeleteDialog