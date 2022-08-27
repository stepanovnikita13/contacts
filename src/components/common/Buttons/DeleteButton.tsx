import { IconButton, IconButtonProps, Tooltip } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'

const DeleteButton: React.FC<IconButtonProps> = (props) => (
	<Tooltip title='Delete'>
		<IconButton {...props} size='large' aria-label='Delete'>
			<DeleteIcon fontSize='inherit' />
		</IconButton>
	</Tooltip>
)

export default DeleteButton