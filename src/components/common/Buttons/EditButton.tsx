import { IconButton, IconButtonProps, Tooltip } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'

const EditButton: React.FC<IconButtonProps> = (props) => (
	<Tooltip title='Edit'>
		<IconButton onClick={props.onClick} size='large' aria-label='Edit'>
			<EditIcon fontSize='inherit' />
		</IconButton>
	</Tooltip>
)

export default EditButton